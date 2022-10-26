import { useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  OptionType,
  Select as SelectComponent,
} from '@siakit/form-components'
import { useField } from '@unform/core'

type SelectProps = {
  name: string
  options: OptionType[]
  returnType?: 'key' | 'option'
  label?: string
  placeholder?: string
  onChange?: (option: OptionType | null) => void
}

export function Select({
  name,
  options,
  returnType = 'key',
  label,
  placeholder,
  onChange,
}: SelectProps) {
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [fieldValue, setFieldValue] = useState<OptionType | null>(
    defaultValue ?? null,
  )

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => {
        if (returnType === 'option') {
          return fieldValue
        }

        return fieldValue?.value ?? null
      },
      setValue: (_, value: string | number | OptionType | null) => {
        if (typeof value === 'string' || typeof value === 'number') {
          const findOption = options.find((option) => option.value === value)

          setFieldValue(findOption ?? null)
        } else {
          setFieldValue(value)
        }
      },
      clearValue: () => {
        setFieldValue(null)
      },
    })
  }, [fieldName, registerField, fieldValue, returnType, options])

  function handleChange(value: OptionType | null) {
    setFieldValue(value)

    if (onChange) {
      onChange(value)
    }
  }

  return (
    <FormControl error={error}>
      <>{!!label && <FormLabel isErrored={!!error}>{label}</FormLabel>}</>

      <SelectComponent
        options={options}
        value={fieldValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </FormControl>
  )
}
