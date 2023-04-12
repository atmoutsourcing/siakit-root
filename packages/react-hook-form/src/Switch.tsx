import { Controller, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  Switch as SwitchComponent,
} from '@siakit/form-components'

import { get } from './get'

interface SwitchProps {
  name: string
  label?: string
  onChange?: (value: boolean) => void
  disabled?: boolean
}

export function Switch({ name, label, onChange, disabled }: SwitchProps) {
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
          <SwitchComponent
            value={field.value}
            onChange={(value) => {
              field.onChange(value)

              if (onChange) {
                onChange(value)
              }
            }}
            disabled={disabled}
          />
        </FormControl>
      )}
    />
  )
}
