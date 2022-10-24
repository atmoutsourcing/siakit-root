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
}

export function PasswordInput({
  name,
  label,
  placeholder,
  strength,
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

  return (
    <FormControl error={error}>
      <>{!!label && <FormLabel isErrored={!!error}>{label}</FormLabel>}</>

      <PasswordInputComponent
        value={fieldValue}
        onChange={setFieldValue}
        placeholder={placeholder}
        strength={strength}
      />
    </FormControl>
  )
}
