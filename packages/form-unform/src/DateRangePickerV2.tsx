import { useEffect, useState } from 'react'

import {
  BlockedDateType,
  DateRangeType,
  FormControl,
  FormLabel,
  DateRangePickerV2 as DateRangePickerV2Component,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'
import { useField } from '@unform/core'

import { InfoIcon } from './components/InfoIcon'

type DateRangePickerV2Props = {
  name: string
  label?: string
  placeholder?: string
  onChange?: (value: DateRangeType | null) => void
  disabled?: boolean
  explanation?: string
  minDate?: Date
  maxDate?: Date
  blockedDates?: BlockedDateType[]
  disableWeekends?: boolean
  disablePastDates?: boolean
  presets?: boolean
  locale?: string
}

export function DateRangePickerV2({
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
  presets,
  locale,
}: DateRangePickerV2Props) {
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [fieldValue, setFieldValue] = useState<DateRangeType | null>(
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

  function handleChange(value: DateRangeType | null) {
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

      <DateRangePickerV2Component
        value={fieldValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        minDate={minDate}
        maxDate={maxDate}
        blockedDates={blockedDates}
        disableWeekends={disableWeekends}
        disablePastDates={disablePastDates}
        presets={presets}
        locale={locale}
      />
    </FormControl>
  )
}
