import { Controller, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  Select as SelectComponent,
} from '@siakit/form-components'

import { get } from './get'

type OptionType = {
  value: any
  label: string
}

function findOption(value: any, options: OptionType[]) {
  const option = options.find((item) => item.value === value)

  if (option) {
    return option
  }

  return null
}

interface SelectProps {
  name: string
  label?: string
  placeholder?: string
  options: OptionType[]
  onChange?: (value: any) => void
  disabled?: boolean
}

export function Select({
  name,
  label,
  placeholder,
  options = [],
  onChange,
  disabled,
}: SelectProps) {
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

          <SelectComponent
            value={findOption(field.value, options)}
            onChange={(option) => {
              const newValue = option?.value
              field.onChange(newValue)

              if (onChange) {
                onChange(newValue)
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
