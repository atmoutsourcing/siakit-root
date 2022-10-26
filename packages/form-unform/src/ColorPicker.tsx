import { useEffect, useState } from 'react'

import { Color } from '@siakit/core'
import {
  FormControl,
  FormLabel,
  ColorPicker as ColorPickerComponent,
} from '@siakit/form-components'
import { useField } from '@unform/core'

type ColorPickerProps = {
  name: string
  label?: string
  onChange?: (value: Color | null) => void
}

export function ColorPicker({ name, label, onChange }: ColorPickerProps) {
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
      <>{!!label && <FormLabel isErrored={!!error}>{label}</FormLabel>}</>

      <ColorPickerComponent value={fieldValue} onChange={handleChange} />
    </FormControl>
  )
}
