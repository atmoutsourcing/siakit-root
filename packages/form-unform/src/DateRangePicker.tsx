import { useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  DateRangePicker as DateRangePickerComponent,
  DateRange,
} from '@siakit/form-components'
import { useField } from '@unform/core'

type DateRangePickerProps = {
  name: string
  label?: string
  placeholder?: string
  onChange?: (value: DateRange | null) => void
  disabled?: boolean
}

export function DateRangePicker({
  name,
  label,
  placeholder,
  onChange,
  disabled,
}: DateRangePickerProps) {
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [fieldValue, setFieldValue] = useState<DateRange | null>(
    defaultValue ?? null,
  )

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => {
        return fieldValue
      },
      setValue: (_, value) => {
        setFieldValue(value)
      },
      clearValue: () => {
        setFieldValue(null)
      },
    })
  }, [fieldName, registerField, fieldValue])

  function handleChange(value: DateRange | null) {
    setFieldValue(value)

    if (onChange) {
      onChange(value)
    }
  }

  return (
    <FormControl error={error}>
      <>{!!label && <FormLabel isErrored={!!error}>{label}</FormLabel>}</>

      <DateRangePickerComponent
        value={fieldValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </FormControl>
  )
}
