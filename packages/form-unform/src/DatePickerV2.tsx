import { useEffect, useState } from 'react'

import {
  BlockedDateType,
  FormControl,
  FormLabel,
  DatePickerV2 as DatePickerV2Component,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'
import { useField } from '@unform/core'

import { InfoIcon } from './components/InfoIcon'

type DatePickerV2Props = {
  name: string
  label?: string
  placeholder?: string
  onChange?: (value: Date | null) => void
  disabled?: boolean
  explanation?: string
  minDate?: Date
  maxDate?: Date
  blockedDates?: BlockedDateType[]
  disableWeekends?: boolean
  disablePastDates?: boolean
  locale?: string
}

export function DatePickerV2({
  name,
  label,
  placeholder,
  onChange,
  disabled,
  explanation,
  minDate,
  maxDate,
  blockedDates,
  disableWeekends,
  disablePastDates,
  locale,
}: DatePickerV2Props) {
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [fieldValue, setFieldValue] = useState<Date | null>(
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

  function handleChange(value: Date | null) {
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

      <DatePickerV2Component
        value={fieldValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        minDate={minDate}
        maxDate={maxDate}
        blockedDates={blockedDates}
        disableWeekends={disableWeekends}
        disablePastDates={disablePastDates}
        locale={locale}
      />
    </FormControl>
  )
}
