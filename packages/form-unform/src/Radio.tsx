import { useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  OptionType,
  Radio as RadioComponent,
} from '@siakit/form-components'
import { useField } from '@unform/core'

type RadioProps = {
  name: string
  options: OptionType[]
  label?: string
  onChange?: (value: string) => void
  disabled?: boolean
}

export function Radio({
  name,
  options,
  label,
  onChange,
  disabled,
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
      <>{!!label && <FormLabel isErrored={!!error}>{label}</FormLabel>}</>

      <RadioComponent
        options={options}
        value={fieldValue}
        onChange={handleChange}
        disabled={disabled}
      />
    </FormControl>
  )
}
