import { Controller, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  PasswordInput as PasswordInputComponent,
} from '@siakit/form-components'

import { get } from './get'

interface PasswordInputProps {
  name: string
  label?: string
  placeholder?: string
  onChange?: (value: string) => void
  disabled?: boolean
}

export function PasswordInput({
  name,
  label,
  placeholder,
  onChange,
  disabled,
}: PasswordInputProps) {
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
        console.log('Password field', field.value)

        return (
          <FormControl error={error}>
            <>{!!label && <FormLabel isErrored={!!error}>{label}</FormLabel>}</>
            <PasswordInputComponent
              value={field.value}
              onChange={(value) => {
                console.log(value)
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
