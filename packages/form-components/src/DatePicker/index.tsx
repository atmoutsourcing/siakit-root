import { useEffect, useRef, useState } from 'react'
import { DayPicker } from 'react-day-picker'

import 'react-day-picker/dist/style.css'
import { format, isValid } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { toPattern } from 'vanilla-masker'

import { IconButton } from '@siakit/icon-button'
import { Popover, PopoverTrigger } from '@siakit/popover'

import { ClearButton } from '../components/ClearButton'
import { Sufix } from '../components/Sufix'
import { InputContainer } from '../styles'
import { CalendarIcon } from './CalendarIcon'
import { PopoverContentCustom } from './styles'

type DatePickerProps = {
  placeholder?: string
  value: Date | undefined
  onChange: (value?: Date) => void
  onBlur?: (event?: React.FocusEvent<HTMLInputElement, Element>) => void
  onFocus?: (event?: React.FocusEvent<HTMLInputElement, Element>) => void
}

function DatePicker({
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  ...props
}: DatePickerProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(() => {
    if (value) {
      const masked = format(value, 'dd/MM/yyyy')

      return masked
    }

    return ''
  })

  const [open, setOpen] = useState(false)

  const [selected, setSelected] = useState<Date | undefined>(value)
  const [monthSelected, setMonthSelect] = useState<Date | undefined>(value)

  useEffect(() => {
    if (value) {
      const masked = format(value, 'dd/MM/yyyy')

      if (inputRef.current) {
        inputRef.current.value = masked
      }

      setSelected(value)
      setMonthSelect(value)
      setIsFilled(masked)
    } else {
      if (inputRef.current) {
        inputRef.current.value = ''
      }

      setSelected(undefined)
      setMonthSelect(undefined)
      setIsFilled('')
    }
  }, [value])

  function handleChange(data: string): void {
    const masked = toPattern(data, '99/99/9999')

    if (inputRef.current) {
      inputRef.current.value = masked
    }

    const [day, month, year] = masked.split('/')

    if (year?.length === 4) {
      const newDate = new Date(Number(year), Number(month) - 1, Number(day))

      if (isValid(newDate)) {
        setSelected(newDate)
        setMonthSelect(newDate)

        if (onChange) {
          onChange(newDate)
        }
      }
    }
  }

  function handleBlur(
    event?: React.FocusEvent<HTMLInputElement, Element>,
  ): void {
    setIsFocused(false)

    if (onBlur && event) {
      onBlur(event)
    }
  }

  function handleFocus(
    event?: React.FocusEvent<HTMLInputElement, Element>,
  ): void {
    setIsFocused(true)

    if (onFocus && event) {
      onFocus(event)
    }
  }

  function handleSelect(data: Date | undefined): void {
    if (data) {
      setSelected(data)

      const formattedDate = format(data, 'dd/MM/yyyy')

      handleChange(formattedDate)

      setOpen(false)
    }
  }

  function handleClear() {
    setSelected(undefined)
    setMonthSelect(undefined)
    setIsFilled('')
    onChange(undefined)
  }

  return (
    <InputContainer isFocused={isFocused} isFilled={!!isFilled} {...props}>
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        onChange={(event) => handleChange(event.target.value)}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />

      <ClearButton handleClear={handleClear} />

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <IconButton
            type="button"
            size="sm"
            variant="ghost"
            colorScheme="gray"
            icon={<CalendarIcon />}
            tabIndex={-1}
          />
        </PopoverTrigger>

        <PopoverContentCustom>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={handleSelect}
            month={monthSelected}
            onMonthChange={setMonthSelect}
            locale={ptBR}
          />
        </PopoverContentCustom>
      </Popover>
    </InputContainer>
  )
}

export { DatePicker }
export type { DatePickerProps }
