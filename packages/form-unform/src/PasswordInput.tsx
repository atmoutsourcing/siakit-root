import { useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  PasswordInput as PasswordInputComponent,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'
import { useField } from '@unform/core'

import { InfoIcon } from './components/InfoIcon'

type PasswordInputProps = {
  name: string
  label?: string
  placeholder?: string
  strength?: number
  onChange?: (value: string) => void
  disabled?: boolean
  explanation?: string
}

export function PasswordInput({
  name,
  label,
  placeholder,
  strength,
  onChange,
  disabled,
  explanation,
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
      <>
        {(label || explanation) && (
          <Flex align="center" gap={4} css={{ fill: '$gray9' }}>
            <FormLabel isErrored={!!error}>{label}</FormLabel>

            {explanation && <InfoIcon explanation={explanation} />}
          </Flex>
        )}
      </>

      <PasswordInputComponent
        value={fieldValue}
        onChange={handleChange}
        placeholder={placeholder}
        strength={strength}
        disabled={disabled}
      />
    </FormControl>
  )
}
