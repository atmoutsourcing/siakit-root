import { useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  Slider as SliderComponent,
} from '@siakit/form-components'
import { useField } from '@unform/core'

type SliderProps = {
  name: string
  label?: string
  onChange?: (value: number[]) => void
  disabled?: boolean
}

export function Slider({ name, label, onChange, disabled }: SliderProps) {
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
      <>{!!label && <FormLabel isErrored={!!error}>{label}</FormLabel>}</>

      <SliderComponent
        value={fieldValue}
        onChange={handleChange}
        disabled={disabled}
      />
    </FormControl>
  )
}
