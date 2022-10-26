import { useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  PhoneInput as PhoneInputComponent,
} from '@siakit/form-components'
import { useField } from '@unform/core'

type PhoneInputProps = {
  name: string
  label?: string
  placeholder?: string
  onChange?: (value: string) => void
}

export function PhoneInput({
  name,
  label,
  placeholder,
  onChange,
}: PhoneInputProps) {
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

      <PhoneInputComponent
        value={fieldValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </FormControl>
  )
}
