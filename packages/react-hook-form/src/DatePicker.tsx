import { Controller, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  DatePicker as DatePickerComponent,
} from '@siakit/form-components'

import { get } from './get'

interface DatePickerProps {
  name: string
  label?: string
  placeholder?: string
  onChange?: (value: Date | null) => void
  disabled?: boolean
}

export function DatePicker({
  name,
  label,
  placeholder,
  onChange,
  disabled,
}: DatePickerProps) {
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
      render={({ field }) => (
        <FormControl error={error}>
          <>{!!label && <FormLabel isErrored={error}>{label}</FormLabel>}</>

          <DatePickerComponent
            value={field.value}
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
      )}
    />
  )
}
