import { InputHTMLAttributes, useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  NumberInput as NumberInputComponent,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'
import { useField } from '@unform/core'

import { InfoIcon } from './components/InfoIcon'

type NumberInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  name: string
  label?: string
  onChange?: (value: string) => void
  explanation?: string
}

export function NumberInput({
  name,
  label,
  onChange,
  explanation,
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
      <>
        {(label || explanation) && (
          <Flex align="center" gap={4} css={{ fill: '$gray9' }}>
            <FormLabel isErrored={!!error}>{label}</FormLabel>

            {explanation && <InfoIcon explanation={explanation} />}
          </Flex>
        )}
      </>

      <NumberInputComponent
        value={fieldValue}
        onChange={handleChange}
        {...props}
      />
    </FormControl>
  )
}
