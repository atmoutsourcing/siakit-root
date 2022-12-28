import { InputHTMLAttributes, useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  NumberInput as NumberInputComponent,
} from '@siakit/form-components'
import { useField } from '@unform/core'

type NumberInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  name: string
  label?: string
  onChange?: (value: string) => void
}

export function NumberInput({
  name,
  label,
  onChange,

  ...props
}: NumberInputProps) {
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [fieldValue, setFieldValue] = useState(() => {
    if (typeof defaultValue === 'number') {
      return String(defaultValue)
    }

    if (typeof defaultValue === 'string') {
      return defaultValue
    }

    return ''
  })

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => {
        if (fieldValue) {
          return Number(fieldValue)
        }

        return undefined
      },
      setValue: (_, value) => {
        if (typeof value === 'number') {
          setFieldValue(String(value))
        } else if (typeof value === 'string') {
          setFieldValue(value)
        } else {
          setFieldValue(value ?? '')
        }
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

      <NumberInputComponent
        value={fieldValue}
        onChange={handleChange}
        {...props}
      />
    </FormControl>
  )
}
