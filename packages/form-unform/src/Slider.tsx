import { useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  Slider as SliderComponent,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'
import { useField } from '@unform/core'

import { InfoIcon } from './components/InfoIcon'

type SliderProps = {
  name: string
  label?: string
  onChange?: (value: number[]) => void
  disabled?: boolean
  explanation?: string
}

export function Slider({
  name,
  label,
  onChange,
  disabled,
  explanation,
}: SliderProps) {
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [fieldValue, setFieldValue] = useState<number[]>([defaultValue] ?? [0])

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => fieldValue[0],
      setValue: (_, value) => {
        setFieldValue([value])
      },
      clearValue: () => {
        setFieldValue([0])
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

      <SliderComponent
        value={fieldValue}
        onChange={handleChange}
        disabled={disabled}
      />
    </FormControl>
  )
}
