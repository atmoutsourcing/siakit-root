import { useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  LanguagePicker as LanguagePickerComponent,
  FlagOptionType,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'
import { useField } from '@unform/core'

import { InfoIcon } from './components/InfoIcon'

type LanguagePickerProps = {
  name: string
  label?: string
  placeholder?: string
  onChange?: (option: FlagOptionType | null) => void
  disabled?: boolean
  explanation?: string
}

export function LanguagePicker({
  name,
  label,
  placeholder,
  onChange,
  disabled,
  explanation,
}: LanguagePickerProps) {
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [fieldValue, setFieldValue] = useState<FlagOptionType | null>(
    defaultValue ?? null,
  )

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => {
        return fieldValue
      },
      setValue: (_, value: FlagOptionType | null) => {
        setFieldValue(value)
      },
      clearValue: () => {
        setFieldValue(null)
      },
    })
  }, [fieldName, registerField, fieldValue])

  function handleChange(value: FlagOptionType | null) {
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

      <LanguagePickerComponent
        value={fieldValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </FormControl>
  )
}
