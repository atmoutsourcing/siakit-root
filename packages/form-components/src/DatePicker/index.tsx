import { ChangeEvent, useEffect, useState } from 'react'
import { DayPicker } from 'react-day-picker'

import { format, isValid } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { IconButton } from '@siakit/icon-button'
import { toMask } from '@siakit/mask'
import { Popover, PopoverTrigger } from '@siakit/popover'

import 'react-day-picker/dist/style.css'

import {
  Input,
  Suffix,
  DatePickerContainer,
  CustomPopoverContent,
} from './styles'

type DatePickerProps = {
  value: Date | null
  onChange: (value: Date | null) => void
  placeholder?: string
  disabled?: boolean
}

type RestProps = {
  isErrored: boolean
}

export function DatePicker({
  value,
  onChange,
  placeholder,
  disabled,
  ...props
}: DatePickerProps) {
  const { isErrored } = props as RestProps

  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState(() => {
    if (value) {
      return format(value, 'dd/MM/yyyy')
    }

    return ''
  })
  const [selected, setSelected] = useState<Date | null>(value)
  const [monthSelected, setMonthSelect] = useState<Date | null>(value)

  useEffect(() => {
    if (value) {
      setSelected(value)
      setMonthSelect(value)

      setInputValue(format(value, 'dd/MM/yyyy'))
    }
  }, [value])

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const targetValue = event.target.value

    const newValue = toMask({ value: targetValue, mask: 'date' })

    setInputValue(newValue)

    if (newValue.length === 10) {
      const splittedDate = newValue.split('/')

      const date = new Date(
        Number(splittedDate[2]),
        Number(splittedDate[1]) - 1,
        Number(splittedDate[0]),
      )

      if (isValid(date)) {
        setSelected(date)
        setMonthSelect(date)
        onChange(date)
      }
    }
  }

  function handleChange(date: Date | undefined) {
    if (date) {
      const newValue = format(date, 'dd/MM/yyyy')

      setInputValue(newValue)
      onChange(date)
      setOpen(false)
    }
  }

  function handleClear() {
    setInputValue('')
    onChange(null)
    setSelected(null)
    setMonthSelect(null)
  }

  return (
    <DatePickerContainer isErrored={isErrored} disabled={disabled}>
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      />

      <Suffix css={{ visibility: inputValue ? 'visible' : 'hidden' }}>
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

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <IconButton
            type="button"
            size="sm"
            variant="ghost"
            colorScheme="gray"
            tabIndex={-1}
            disabled={disabled}
            onClick={() => setOpen(true)}
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
          <DayPicker
            mode="single"
            selected={selected ?? undefined}
            onSelect={handleChange}
            month={monthSelected ?? undefined}
            onMonthChange={setMonthSelect}
            locale={ptBR}
          />
        </CustomPopoverContent>
      </Popover>
    </DatePickerContainer>
  )
}
