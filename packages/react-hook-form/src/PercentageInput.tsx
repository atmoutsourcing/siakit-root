import { Controller, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  PercentageInput as PercentageInputComponent,
} from '@siakit/form-components'

import { get } from './get'

interface PercentageInputProps {
  name: string
  label?: string
  placeholder?: string
  onChange?: (value: number | undefined) => void
  disabled?: boolean
}

export function PercentageInput({
  name,
  label,
  placeholder,
  onChange,
  disabled,
}: PercentageInputProps) {
  const {
    formState: { errors },
    control,
  } = useFormContext()

  const fieldError = get(errors, name)

  return (
    <FormControl error={fieldError?.message?.toString()}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            {!!label && <FormLabel>{label}</FormLabel>}
            <PercentageInputComponent
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
          </>
        )}
      />
    </FormControl>
  )
}
