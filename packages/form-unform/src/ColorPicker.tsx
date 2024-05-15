import { useEffect, useState } from 'react'

import { Color } from '@siakit/core'
import {
  FormControl,
  FormLabel,
  ColorPicker as ColorPickerComponent,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'
import { useField } from '@unform/core'

import { InfoIcon } from './components/InfoIcon'

type ColorPickerProps = {
  name: string
  label?: string
  onChange?: (value: Color | null) => void
  disabled?: boolean
  explanation?: string
}

export function ColorPicker({
  name,
  label,
  onChange,
  disabled,
  explanation,
}: ColorPickerProps) {
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [fieldValue, setFieldValue] = useState<Color | null>(
    defaultValue ?? null,
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
        setFieldValue(null)
      },
    })
  }, [fieldName, registerField, fieldValue])

  function handleChange(value: Color | null) {
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

      <ColorPickerComponent
        value={fieldValue}
        onChange={handleChange}
        disabled={disabled}
      />
    </FormControl>
  )
}
