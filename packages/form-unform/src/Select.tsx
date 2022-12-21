import { useCallback, useEffect, useState } from 'react'

import uniqBy from 'lodash.uniqby'

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
  disabled?: boolean
}

export function Select({
  name,
  options,
  returnType = 'key',
  label,
  placeholder,
  onChange,
  disabled,
}: SelectProps) {
  const [data, setData] = useState(options)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    setData(options)
  }, [options])

  const processValue = useCallback(
    (value: string | number | null) => {
      if (typeof value === 'string' || typeof value === 'number') {
        const findOption = options.find((option) => option.value === value)

        return findOption ?? null
      }

      return null
    },
    [options],
  )

  const [fieldValue, setFieldValue] = useState<OptionType | null>(
    processValue(defaultValue) ?? null,
  )

  function handleChange(value: OptionType | null) {
    setFieldValue(value)

    if (onChange) {
      onChange(value)
    }
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => {
        if (returnType === 'option') {
          return fieldValue
        }

        return fieldValue?.value ?? ''
      },
      setValue: (_, value: string | number | OptionType | null) => {
        if (typeof value === 'object') {
          setData((prevState: any) => uniqBy([...prevState, value], 'value'))
          handleChange(value)
        } else {
          setFieldValue(processValue(value))
        }
      },
      clearValue: () => {
        setFieldValue(null)
      },
    })
  }, [fieldName, registerField, fieldValue, returnType, options, processValue])

  return (
    <FormControl error={error}>
      <>{!!label && <FormLabel isErrored={!!error}>{label}</FormLabel>}</>

      <SelectComponent
        options={data}
        value={fieldValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </FormControl>
  )
}
