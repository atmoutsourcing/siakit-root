import { useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  OptionType,
  Radio as RadioComponent,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'
import { useField } from '@unform/core'

import { InfoIcon } from './components/InfoIcon'

type RadioProps = {
  name: string
  options: OptionType[]
  label?: string
  onChange?: (value: string) => void
  disabled?: boolean
  explanation?: string
}

export function Radio({
  name,
  options,
  label,
  onChange,
  disabled,
  explanation,
}: RadioProps) {
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [fieldValue, setFieldValue] = useState(defaultValue ?? '')

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => {
        if (typeof options[0].value === 'number') {
          return Number(fieldValue)
        }

        return fieldValue
      },
      setValue: (_, value) => {
        setFieldValue(value)
      },
      clearValue: () => {
        setFieldValue(false)
      },
    })
  }, [fieldName, registerField, fieldValue, options])

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

      <RadioComponent
        options={options}
        value={fieldValue}
        onChange={handleChange}
        disabled={disabled}
      />
    </FormControl>
  )
}
