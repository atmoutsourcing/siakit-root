import { Controller, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  MoneyInput as MoneyInputComponent,
} from '@siakit/form-components'

import { get } from './get'

function convertToNumber(value: string) {
  if (!value) {
    return 0
  }

  return Number(value.replace('.', '').replace(',', '.'))
}

interface MoneyInputProps {
  name: string
  label?: string
  placeholder?: string
  onChange?: (value: number) => void
  disabled?: boolean
}

export function MoneyInput({
  name,
  label,
  placeholder,
  onChange,
  disabled,
}: MoneyInputProps) {
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
            <MoneyInputComponent
              value={
                field.value
                  ? field.value.toLocaleString('PT-BR', {
                      minimumFractionDigits: 2,
                      currency: 'BRL',
                    })
                  : ''
              }
              onChange={(value) => {
                const newValue = convertToNumber(value)
                field.onChange(newValue)

                if (onChange) {
                  onChange(newValue)
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
