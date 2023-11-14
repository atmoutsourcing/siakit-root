import { Controller, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  DateRangePicker as DateRangePickerComponent,
  DateRange,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'

import { InfoIcon } from './components/InfoIcon'
import { get } from './get'

interface DateRangePickerProps {
  name: string
  label?: string
  placeholder?: string
  onChange?: (value: DateRange | null) => void
  disabled?: boolean
  explanation?: string
}

export function DateRangePicker({
  name,
  label,
  placeholder,
  onChange,
  disabled,
  explanation,
}: DateRangePickerProps) {
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
                  <FormLabel isErrored={!!error}>{label}</FormLabel>

                  {explanation && <InfoIcon explanation={explanation} />}
                </Flex>
              )}
            </>

            <DateRangePickerComponent
              value={field?.value}
              onChange={(value) => {
                field.onChange(value)

                if (onChange) {
                  onChange(value)
                }
              }}
              placeholder={placeholder}
              disabled={disabled}
            />
          </FormControl>
        )
      }}
    />
  )
}
