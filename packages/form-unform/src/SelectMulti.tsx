import { useCallback, useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  OptionType,
  SelectMulti as SelectMultiComponent,
} from '@siakit/form-components'
import { useField } from '@unform/core'

type SelectMultiProps = {
  name: string
  options: OptionType[]
  returnType?: 'key' | 'option'
  label?: string
  placeholder?: string
  onChange?: (option: OptionType[]) => void
  disabled?: boolean
  closeMenuOnSelect?: boolean
  menuPlacement?: 'auto' | 'bottom' | 'top'
  maxHeight?: number
}

export function SelectMulti({
  name,
  options,
  returnType = 'key',
  label,
  placeholder,
  onChange,
  disabled,
  closeMenuOnSelect = true,
  menuPlacement,
  maxHeight,
}: SelectMultiProps) {
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const processValue = useCallback(
    (value: OptionType[] | (string | number)[]) => {
      if (!value || !value.length) {
        return []
      } else {
        const values = [] as OptionType[]

        value.forEach((item) => {
          if (typeof item === 'object') {
            values.push(item)
          } else {
            const findOption = options.find((option) => option.value === item)

            if (findOption) {
              values.push(findOption)
            }
          }
        })

        return values
      }
    },
    [options],
  )

  const [fieldValue, setFieldValue] = useState<OptionType[]>(
    processValue(defaultValue) ?? [],
  )

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => {
        if (returnType === 'option') {
          return fieldValue
        }

        return fieldValue?.map((option) => option.value) ?? null
      },
      setValue: (_, value) => {
        setFieldValue(processValue(value))
      },
      clearValue: () => {
        setFieldValue([])
      },
    })
  }, [fieldName, registerField, fieldValue, returnType, options, processValue])

  function handleChange(value: OptionType[] | null) {
    setFieldValue(value ?? [])

    if (onChange) {
      onChange(value ?? [])
    }
  }

  return (
    <FormControl error={error}>
      <>{!!label && <FormLabel isErrored={!!error}>{label}</FormLabel>}</>

      <SelectMultiComponent
        options={options}
        value={fieldValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        closeMenuOnSelect={closeMenuOnSelect}
        menuPlacement={menuPlacement}
        maxHeight={maxHeight}
      />
    </FormControl>
  )
}
