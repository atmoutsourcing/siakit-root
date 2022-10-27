import { useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  Checkbox as CheckboxComponent,
  OptionType,
} from '@siakit/form-components'
import { useField } from '@unform/core'

type CheckboxProps = {
  name: string
  options: OptionType[]
  label?: string
  onChange?: (value: { [key: string]: boolean }) => void
  disabled?: boolean
}

export function Checkbox({
  name,
  options,
  label,
  onChange,
  disabled,
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
      <>{!!label && <FormLabel isErrored={!!error}>{label}</FormLabel>}</>

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
