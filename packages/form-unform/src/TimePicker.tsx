import { useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  TimePicker as TimePickerComponent,
} from '@siakit/form-components'
import { useField } from '@unform/core'

type TimePickerProps = {
  name: string
  label?: string
  placeholder?: string
  onChange?: (value: number[]) => void
  disabled?: boolean
}

export function TimePicker({
  name,
  label,
  placeholder,
  onChange,
  disabled,
}: TimePickerProps) {
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [fieldValue, setFieldValue] = useState<number[]>(defaultValue ?? [])

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => fieldValue,
      setValue: (_, value) => {
        setFieldValue(value)
      },
      clearValue: () => {
        setFieldValue([])
      },
    })
  }, [fieldName, registerField, fieldValue])

  function handleChange(value: number[]) {
    setFieldValue(value)

    if (onChange) {
      onChange(value)
    }
  }

  return (
    <FormControl error={error}>
      <>{!!label && <FormLabel isErrored={!!error}>{label}</FormLabel>}</>

      <TimePickerComponent
        value={fieldValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </FormControl>
  )
}
