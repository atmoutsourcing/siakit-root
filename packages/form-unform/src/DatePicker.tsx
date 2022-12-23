import { useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  DatePicker as DatePickerComponent,
} from '@siakit/form-components'
import { useField } from '@unform/core'

type DatePickerProps = {
  name: string
  label?: string
  placeholder?: string
  onChange?: (value: Date | null) => void
  disabled?: boolean
}

export function DatePicker({
  name,
  label,
  placeholder,
  onChange,
  disabled,
}: DatePickerProps) {
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [fieldValue, setFieldValue] = useState<Date | null>(
    defaultValue ?? null,
  )

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => {
        return fieldValue
      },
      setValue: (_, value) => {
        setFieldValue(null)
      },
      clearValue: () => {
        setFieldValue(null)
      },
    })
  }, [fieldName, registerField, fieldValue])

  function handleChange(value: Date | null) {
    setFieldValue(value)

    if (onChange) {
      onChange(value)
    }
  }

  return (
    <FormControl error={error}>
      <>{!!label && <FormLabel isErrored={!!error}>{label}</FormLabel>}</>

      <DatePickerComponent
        value={fieldValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </FormControl>
  )
}
