import { Controller, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  MaskInput as MaskInputComponent,
} from '@siakit/form-components'
import { MaskType } from '@siakit/mask'

import { get } from './get'

interface MaskInputProps {
  name: string
  mask: MaskType
  label?: string
  placeholder?: string
  onChange?: (value: string) => void
  disabled?: boolean
}

export function MaskInput({
  name,
  mask,
  label,
  placeholder,
  onChange,
  disabled,
}: MaskInputProps) {
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
          <MaskInputComponent
            mask={mask}
            value={field.value ?? ''}
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
