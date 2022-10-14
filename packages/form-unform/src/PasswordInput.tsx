import {
  FormControl,
  FormLabel,
  PasswordInput as PasswordInputComponent,
} from '@siakit/form-components'
import { useField } from '@unform/core'
import { useEffect, useState } from 'react'

type PasswordInputProps = {
  name: string
  label?: string
  placeholder?: string
}

export function PasswordInput({
  name,
  label,
  placeholder,
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
      />
    </FormControl>
  )
}