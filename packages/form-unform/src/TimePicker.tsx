import { useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  TimePicker as TimePickerComponent,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'
import { useField } from '@unform/core'

import { InfoIcon } from './components/InfoIcon'

type TimePickerProps = {
  name: string
  label?: string
  placeholder?: string
  onChange?: (value: number[]) => void
  disabled?: boolean
  explanation?: string
}

export function TimePicker({
  name,
  label,
  placeholder,
  onChange,
  disabled,
  explanation,
}: TimePickerProps) {
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [fieldValue, setFieldValue] = useState<number[]>(defaultValue ?? [])

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => fieldValue,
      setValue: (_, value) => {
        setFieldValue(value)
      },
      clearValue: () => {
        setFieldValue([])
      },
    })
  }, [fieldName, registerField, fieldValue])

  function handleChange(value: number[]) {
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

      <TimePickerComponent
        value={fieldValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </FormControl>
  )
}
