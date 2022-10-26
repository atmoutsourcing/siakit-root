import { useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  TextAreaInput as TextAreaInputComponent,
} from '@siakit/form-components'
import { useField } from '@unform/core'

type TextAreaInputProps = {
  name: string
  label?: string
  placeholder?: string
  rows?: number
  onChange?: (value: string) => void
}

export function TextAreaInput({
  name,
  label,
  placeholder,
  rows = 5,
  onChange,
}: TextAreaInputProps) {
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [fieldValue, setFieldValue] = useState(defaultValue ?? '')

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
        setFieldValue('')
      },
    })
  }, [fieldName, registerField, fieldValue])

  function handleChange(value: string) {
    setFieldValue(value)

    if (onChange) {
      onChange(value)
    }
  }

  return (
    <FormControl error={error}>
      <>{!!label && <FormLabel isErrored={!!error}>{label}</FormLabel>}</>

      <TextAreaInputComponent
        value={fieldValue}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
      />
    </FormControl>
  )
}
