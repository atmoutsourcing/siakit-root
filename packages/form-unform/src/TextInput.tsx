import { InputHTMLAttributes, useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  TextInput as TextInputComponent,
} from '@siakit/form-components'
import { useField } from '@unform/core'

type TextInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  name: string
  label?: string
  onChange?: (value: string) => void
  disabled?: boolean
}

export function TextInput({
  name,
  label,
  placeholder,
  onChange,
  disabled,
}: TextInputProps) {
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [fieldValue, setFieldValue] = useState(defaultValue ?? '')

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => {
        return fieldValue
      },
      setValue: (_, value) => {
        setFieldValue(value ?? '')
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

      <TextInputComponent
        value={fieldValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </FormControl>
  )
}
