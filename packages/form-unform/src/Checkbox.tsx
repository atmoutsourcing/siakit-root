import { useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  Checkbox as CheckboxComponent,
  OptionType,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'
import { useField } from '@unform/core'

import { InfoIcon } from './components/InfoIcon'

type CheckboxProps = {
  name: string
  options: OptionType[]
  label?: string
  onChange?: (value: { [key: string]: boolean }) => void
  disabled?: boolean
  explanation?: string
}

export function Checkbox({
  name,
  options,
  label,
  onChange,
  disabled,
  explanation,
}: CheckboxProps) {
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [fieldValue, setFieldValue] = useState<{ [key: string]: boolean }>(
    defaultValue ?? {},
  )

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
        setFieldValue({})
      },
    })
  }, [fieldName, registerField, fieldValue])

  function handleChange(optionValue: number | string, value: boolean) {
    const newFieldValue = fieldValue

    newFieldValue[optionValue] = value

    setFieldValue(newFieldValue)

    if (onChange) {
      onChange(newFieldValue)
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

      <>
        {options.map((option) => (
          <CheckboxComponent
            key={option.value}
            label={option.label}
            value={fieldValue[option.value]}
            onChange={(value) => handleChange(option.value, value)}
            disabled={disabled}
          />
        ))}
      </>
    </FormControl>
  )
}
