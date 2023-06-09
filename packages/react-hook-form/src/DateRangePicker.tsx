import { Controller, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  DateRangePicker as DateRangePickerComponent,
  DateRange,
} from '@siakit/form-components'

import { get } from './get'

interface DateRangePickerProps {
  name: string
  label?: string
  placeholder?: string
  onChange?: (value: DateRange | null) => void
  disabled?: boolean
}

export function DateRangePicker({
  name,
  label,
  placeholder,
  onChange,
  disabled,
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
            <>{!!label && <FormLabel isErrored={!!error}>{label}</FormLabel>}</>

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
