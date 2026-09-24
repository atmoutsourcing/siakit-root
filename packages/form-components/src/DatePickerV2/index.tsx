import { ChangeEvent, useEffect, useState } from 'react'
import { DayPicker } from 'react-day-picker'

import { startOfDay } from 'date-fns'

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
  DATE_TEXT_LENGTH,
  formatDate,
  getBlockReason,
  isOutOfLimits,
  parseDate,
  roundDate,
} from '../utils/date'
import { useDateLocale } from '../utils/locale'
import {
  CustomPopoverContent,
  DatePickerContainer,
  Footer,
  Input,
  Suffix,
} from './styles'

export type DatePickerV2Props = {
  value: Date | null
  onChange: (value: Date | null) => void
  placeholder?: string
  disabled?: boolean
  minDate?: Date
  maxDate?: Date
  /** Injetado pelo FormControl via cloneElement. */
  isErrored?: boolean
  blockedDates?: BlockedDateType[]
  disableWeekends?: boolean
  locale?: string
}

export function DatePickerV2({
  value,
  onChange,
  placeholder,
  disabled,
  minDate,
  maxDate,
  isErrored,
  blockedDates,
  disableWeekends,
  locale,
}: DatePickerV2Props) {
  const { dateFormat, dateFnsLocale, texts } = useDateLocale(locale)
  const [open, setOpen] = useState(false)
  const [text, setText] = useState(() => formatDate(value, dateFormat))
  const [month, setMonth] = useState<Date>(() => value ?? new Date())

  // Quando o value muda por fora (reset(), setValue()) ou o idioma muda,
  // o texto acompanha, inclusive para null.
  const valueTime = value ? value.getTime() : null

  useEffect(() => {
    setText(
      valueTime === null ? '' : formatDate(new Date(valueTime), dateFormat),
    )
  }, [valueTime, dateFormat])

  const limits = { minDate, maxDate }
  const today = startOfDay(new Date())
  const blockOptions = { blockedDates, disableWeekends }

  function isUnavailable(date: Date) {
    return (
      isOutOfLimits(date, limits) || getBlockReason(date, blockOptions) !== null
    )
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const masked = toMask({ value: event.target.value, mask: 'date' })
    setText(masked)

    if (masked === '') {
      if (value) onChange(null)
      return
    }

    if (masked.length === DATE_TEXT_LENGTH) {
      const date =
        parseDate(masked, dateFormat) ?? roundDate(masked, dateFormat)

      if (date && !isUnavailable(date)) {
        setText(formatDate(date, dateFormat))
        setMonth(date)
        onChange(date)
      }
    }
  }

  function handleOpenChange(nextOpen: boolean) {
    if (nextOpen) setMonth(value ?? today)

    setOpen(nextOpen)
  }

  function handleSelect(date: Date | undefined) {
    if (!date || getBlockReason(date, blockOptions) !== null) return

    onChange(date)
    setOpen(false)
  }

  function handleToday() {
    onChange(today)
    setOpen(false)
  }

  function handleClear() {
    setText('')
    onChange(null)
  }

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

      <Popover open={open} onOpenChange={handleOpenChange}>
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

        <CustomPopoverContent align="end">
          <BlockOptionsContext.Provider value={blockOptions}>
            <DayPicker
              mode="single"
              required
              selected={value ?? undefined}
              onSelect={handleSelect}
              month={month}
              onMonthChange={setMonth}
              fromDate={minDate}
              toDate={maxDate}
              locale={dateFnsLocale}
              modifiers={{
                blocked: (day: Date) =>
                  getBlockReason(day, blockOptions) !== null,
              }}
              modifiersClassNames={{ blocked: 'rdp-day_blocked' }}
              components={{ DayContent: BlockedDayContent }}
            />
          </BlockOptionsContext.Provider>

          <Footer>
            <Button
              type="button"
              variant="ghost"
              onClick={handleToday}
              disabled={isUnavailable(today)}
            >
              {texts.today}
            </Button>
          </Footer>
        </CustomPopoverContent>
      </Popover>
    </DatePickerContainer>
  )
}
