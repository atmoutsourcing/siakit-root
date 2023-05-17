import { Controller, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  SelectMulti as SelectMultiComponent,
} from '@siakit/form-components'

import { get } from './get'

type OptionType = {
  value: any
  label: string
}

interface SelectMultiInputProps {
  name: string
  label?: string
  placeholder?: string
  options: OptionType[]
  onChange?: (value: any) => void
  disabled?: boolean
}

export function SelectMultiInput({
  name,
  label,
  placeholder,
  options = [],
  onChange,
  disabled,
}: SelectMultiInputProps) {
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
          <>{!!label && <FormLabel isErrored={!!error}>{label}</FormLabel>}</>

          <SelectMultiComponent
            value={field.value}
            onChange={(options) => {
              field.onChange(options)

              if (onChange) {
                onChange(options)
              }
            }}
            placeholder={placeholder}
            options={options}
            disabled={disabled}
          />
        </FormControl>
      )}
    />
  )
}
