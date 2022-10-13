import {
  FormControl,
  FormLabel,
  TextInput as TextInputComponent,
} from '@siakit/form-components'
import { useField } from '@unform/core'
import { useEffect, useState } from 'react'

type TextInputProps = {
  name: string
  label?: string
  placeholder?: string
}

export function TextInput({ name, label, placeholder }: TextInputProps) {
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
      <>{!!label && <FormLabel isErrored={!!error}>label</FormLabel>}</>

      <TextInputComponent
        value={fieldValue}
        onChange={setFieldValue}
        placeholder={placeholder}
      />
    </FormControl>
  )
}
