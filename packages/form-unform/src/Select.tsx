import { useCallback, useEffect, useState } from 'react'

import uniqBy from 'lodash.uniqby'

import {
  FormControl,
  FormLabel,
  OptionType,
  Select as SelectComponent,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'
import { useField } from '@unform/core'

import { InfoIcon } from './components/InfoIcon'

type SelectProps = {
  name: string
  options: OptionType[]
  returnType?: 'key' | 'option'
  label?: string
  placeholder?: string
  onChange?: (option: OptionType | null) => void
  disabled?: boolean
  menuPlacement?: 'auto' | 'bottom' | 'top'
  explanation?: string
}

export function Select({
  name,
  options,
  returnType = 'key',
  label,
  placeholder,
  onChange,
  disabled,
  menuPlacement = 'auto',
  explanation,
}: SelectProps) {
  const [data, setData] = useState(options)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    setData(options)
  }, [options])

  const processValue = useCallback(
    (value: string | number | undefined) => {
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

        return fieldValue?.value ?? undefined
      },
      setValue: (_, value: string | number | OptionType | null | undefined) => {
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
      <>
        {(label || explanation) && (
          <Flex align="center" gap={4} css={{ fill: '$gray9' }}>
            <FormLabel isErrored={!!error}>{label}</FormLabel>

            {explanation && <InfoIcon explanation={explanation} />}
          </Flex>
        )}
      </>

      <SelectComponent
        options={data}
        value={fieldValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        menuPlacement={menuPlacement}
      />
    </FormControl>
  )
}
