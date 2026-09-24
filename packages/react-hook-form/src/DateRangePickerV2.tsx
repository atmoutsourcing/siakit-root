import { Controller, useFormContext } from 'react-hook-form'

import {
  BlockedDateType,
  DateRangeType,
  FormControl,
  FormLabel,
  DateRangePickerV2 as DateRangePickerV2Component,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'

import { InfoIcon } from './components/InfoIcon'
import { get } from './get'

interface DateRangePickerV2Props {
  name: string
  label?: string
  required?: boolean
  placeholder?: string
  onChange?: (value: DateRangeType | null) => void
  disabled?: boolean
  explanation?: string
  minDate?: Date
  maxDate?: Date
  blockedDates?: BlockedDateType[]
  disableWeekends?: boolean
  presets?: boolean
  locale?: string
}

export function DateRangePickerV2({
  name,
  label,
  required,
  placeholder,
  onChange,
  disabled,
  explanation,
  minDate,
  maxDate,
  blockedDates,
  disableWeekends,
  presets,
  locale,
}: DateRangePickerV2Props) {
  const {
    formState: { errors },
    control,
  } = useFormContext()

  const fieldError = get(errors, name)
  const error = fieldError?.message?.toString()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <FormControl error={error}>
            <>
              {(label || explanation) && (
                <Flex align="center" gap={4} css={{ fill: '$gray9' }}>
                  <FormLabel isErrored={!!error}>
                    {label}{' '}
                    {required && <span style={{ color: 'red' }}>*</span>}
                  </FormLabel>

                  {explanation && <InfoIcon explanation={explanation} />}
                </Flex>
              )}
            </>

            <DateRangePickerV2Component
              value={field?.value ?? null}
              onChange={(value) => {
                field.onChange(value)

                if (onChange) {
                  onChange(value)
                }
              }}
              placeholder={placeholder}
              disabled={disabled}
              minDate={minDate}
              maxDate={maxDate}
              blockedDates={blockedDates}
              disableWeekends={disableWeekends}
              presets={presets}
              locale={locale}
            />
          </FormControl>
        )
      }}
    />
  )
}
