import { ChangeEvent, useEffect, useState } from 'react'
import { DayPicker } from 'react-day-picker'

import { isAfter, isBefore, startOfDay } from 'date-fns'

import { Button } from '@siakit/button'
import { IconButton } from '@siakit/icon-button'
import { toMask } from '@siakit/mask'
import { Popover, PopoverTrigger } from '@siakit/popover'

import 'react-day-picker/dist/style.css'

import {
  BlockedDayContent,
  BlockOptionsContext,
} from '../utils/BlockedDayContent'
import {
  BlockedDateType,
  DateRangeType,
  formatRange,
  getBlockReason,
  isOutOfLimits,
  isSameRange,
  parseRange,
  RANGE_PRESETS,
  RANGE_TEXT_LENGTH,
} from '../utils/date'
import { useDateLocale } from '../utils/locale'
import {
  CustomPopoverContent,
  DatePickerContainer,
  Input,
  PopoverBody,
  PresetDropdown,
  PresetItem,
  PresetList,
  PresetMenu,
  Suffix,
} from './styles'

export type DateRangePickerV2Props = {
  value: DateRangeType | null
  onChange: (value: DateRangeType | null) => void
  placeholder?: string
  disabled?: boolean
  minDate?: Date
  maxDate?: Date
  isErrored?: boolean
  blockedDates?: BlockedDateType[]
  disableWeekends?: boolean
  presets?: boolean
  locale?: string
}

type DraftRangeType = { from: Date | null; to: Date | null }

const EMPTY_DRAFT: DraftRangeType = { from: null, to: null }

export function DateRangePickerV2({
  value,
  onChange,
  placeholder,
  disabled,
  minDate,
  maxDate,
  isErrored,
  blockedDates,
  disableWeekends,
  presets,
  locale,
}: DateRangePickerV2Props) {
  const { dateFormat, dateFnsLocale, texts, presetLabels } =
    useDateLocale(locale)
  const [open, setOpen] = useState(false)
  const [text, setText] = useState(() => formatRange(value, dateFormat))
  const [month, setMonth] = useState<Date>(() => value?.from ?? new Date())
  const [draft, setDraft] = useState<DraftRangeType>(EMPTY_DRAFT)
  const [hovered, setHovered] = useState<Date | null>(null)

  const today = startOfDay(new Date())
  const fromTime = value ? value.from.getTime() : null
  const toTime = value ? value.to.getTime() : null
  const limits = { minDate, maxDate }
  const blockOptions = { blockedDates, disableWeekends }

  // reformata o texto quando o value muda por fora (reset(), setValue())
  // ou quando o idioma (dateFormat) muda.
  useEffect(() => {
    setText(
      fromTime === null || toTime === null
        ? ''
        : formatRange(
            { from: new Date(fromTime), to: new Date(toTime) },
            dateFormat,
          ),
    )
  }, [fromTime, toTime, dateFormat])

  function isUnavailable(date: Date) {
    return (
      isOutOfLimits(date, limits) || getBlockReason(date, blockOptions) !== null
    )
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const masked = toMask({ value: event.target.value, mask: 'daterange' })
    setText(masked)

    if (masked === '') {
      if (value) onChange(null)
      return
    }

    if (masked.length === RANGE_TEXT_LENGTH) {
      const range = parseRange(masked, dateFormat)

      if (range && !isUnavailable(range.from) && !isUnavailable(range.to)) {
        setText(formatRange(range, dateFormat))
        onChange(range)
      }
    }
  }

  function handleOpenPopover(nextOpen: boolean) {
    if (nextOpen) {
      setDraft(value ?? EMPTY_DRAFT)
      setMonth(value?.from ?? new Date())
      setHovered(null)
    }

    setOpen(nextOpen)
  }

  function handleApply(range: DateRangeType) {
    setText(formatRange(range, dateFormat))
    onChange(range)
    setOpen(false)
  }

  function handleDayClick(day: Date) {
    if (isUnavailable(day)) return

    if (!draft.from || draft.to || isBefore(day, draft.from)) {
      setDraft({ from: day, to: null })
      return
    }

    setDraft({ from: draft.from, to: day })
    handleApply({ from: draft.from, to: day })
  }

  function handleClear() {
    setText('')
    setDraft(EMPTY_DRAFT)
    onChange(null)
  }

  // faz o rascunho no calendario.
  const previewTo =
    draft.from &&
    !draft.to &&
    hovered &&
    !isBefore(hovered, draft.from) &&
    !isUnavailable(hovered)
      ? hovered
      : null
  const rangeFrom = draft.from
  const rangeTo = draft.to ?? previewTo
  const draftRange =
    draft.from && draft.to ? { from: draft.from, to: draft.to } : null

  const presetItems = RANGE_PRESETS.map((preset) => {
    const range = preset.getRange(today)

    return (
      <PresetItem
        key={preset.key}
        type="button"
        active={draftRange !== null && isSameRange(range, draftRange)}
        disabled={isUnavailable(range.from) || isUnavailable(range.to)}
        onClick={() => handleApply(range)}
      >
        {presetLabels[preset.key]}
      </PresetItem>
    )
  })

  return (
    <DatePickerContainer isErrored={isErrored} disabled={disabled}>
      <Input
        type="text"
        inputMode="numeric"
        autoComplete="off"
        value={text}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={disabled}
      />

      <Suffix css={{ visibility: text ? 'visible' : 'hidden' }}>
        <IconButton
          type="button"
          size="sm"
          variant="ghost"
          colorScheme="gray"
          tabIndex={-1}
          onClick={handleClear}
          disabled={disabled}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </Suffix>

      <Popover open={open} onOpenChange={handleOpenPopover}>
        <PopoverTrigger>
          <IconButton
            type="button"
            size="sm"
            variant="ghost"
            colorScheme="gray"
            disabled={disabled}
          > 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
              <path
                fillRule="evenodd"
                d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </IconButton>
        </PopoverTrigger>

        <CustomPopoverContent align="end" side="bottom">
          <PopoverBody>
            {presets && (
              <>
                <PresetList>{presetItems}</PresetList>

                {/* presets no mobile */}
                <PresetDropdown>
                  <Popover>
                    <PopoverTrigger>
                      <Button
                        type="button"
                        size={'sm'}
                        variant="secondary"
                        colorScheme="gray"
                      >
                        {texts.presets}
                      </Button>
                    </PopoverTrigger>

                    <PresetMenu align="start">{presetItems}</PresetMenu>
                  </Popover>
                </PresetDropdown>
              </>
            )}

            <BlockOptionsContext.Provider value={blockOptions}>
              <DayPicker
                numberOfMonths={2}
                month={month}
                onMonthChange={setMonth}
                fromDate={minDate}
                toDate={maxDate}
                locale={dateFnsLocale}
                onDayClick={handleDayClick}
                onDayMouseEnter={(day) => setHovered(day)}
                onDayMouseLeave={() => setHovered(null)}
                modifiers={{
                  blocked: (day: Date) =>
                    getBlockReason(day, blockOptions) !== null,
                  selected: [rangeFrom ?? false, rangeTo ?? false],
                  range_start: rangeFrom ?? false,
                  range_end: rangeTo ?? false,
                  range_middle: (day: Date) =>
                    rangeFrom !== null &&
                    rangeTo !== null &&
                    isAfter(day, rangeFrom) &&
                    isBefore(day, rangeTo),
                }}
                modifiersClassNames={{ blocked: 'rdp-day_blocked' }}
                components={{ DayContent: BlockedDayContent }}
              />
            </BlockOptionsContext.Provider>
          </PopoverBody>
        </CustomPopoverContent>
      </Popover>
    </DatePickerContainer>
  )
}
