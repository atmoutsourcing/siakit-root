import { Controller, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  NumberInput as NumberInputComponent,
} from '@siakit/form-components'

import { get } from './get'

interface NumberInputProps {
  name: string
  label?: string
  placeholder?: string
  onChange?: (value: number | undefined) => void
  disabled?: boolean
}

export function NumberInput({
  name,
  label,
  placeholder,
  onChange,
  disabled,
}: NumberInputProps) {
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

          <NumberInputComponent
            value={field.value ? String(field.value) : ''}
            onChange={(value) => {
              if (value) {
                const newValue = Number(value)

                field.onChange(newValue)
                if (onChange) {
                  onChange(newValue)
                }
              } else {
                const newValue = undefined

                field.onChange(newValue)
                if (onChange) {
                  onChange(newValue)
                }
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
