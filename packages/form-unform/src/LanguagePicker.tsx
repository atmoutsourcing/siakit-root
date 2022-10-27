import { useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  LanguagePicker as LanguagePickerComponent,
  FlagOptionType,
} from '@siakit/form-components'
import { useField } from '@unform/core'

type LanguagePickerProps = {
  name: string
  label?: string
  placeholder?: string
  onChange?: (option: FlagOptionType | null) => void
  disabled?: boolean
}

export function LanguagePicker({
  name,
  label,
  placeholder,
  onChange,
  disabled,
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
      <>{!!label && <FormLabel isErrored={!!error}>{label}</FormLabel>}</>

      <LanguagePickerComponent
        value={fieldValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </FormControl>
  )
}
