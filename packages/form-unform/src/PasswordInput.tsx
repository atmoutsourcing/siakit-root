import { useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  PasswordInput as PasswordInputComponent,
} from '@siakit/form-components'
import { useField } from '@unform/core'

type PasswordInputProps = {
  name: string
  label?: string
  placeholder?: string
  strength?: number
  onChange?: (value: string) => void
}

export function PasswordInput({
  name,
  label,
  placeholder,
  strength,
  onChange,
}: PasswordInputProps) {
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

      <PasswordInputComponent
        value={fieldValue}
        onChange={handleChange}
        placeholder={placeholder}
        strength={strength}
      />
    </FormControl>
  )
}
