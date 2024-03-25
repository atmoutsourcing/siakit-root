import { Controller, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  MoneyInput as MoneyInputComponent,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'

import { InfoIcon } from './components/InfoIcon'
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
  required?: boolean
  placeholder?: string
  onChange?: (value: number) => void
  disabled?: boolean
  explanation?: string
}

export function MoneyInput({
  name,
  label,
  required,
  placeholder,
  onChange,
  disabled,
  explanation,
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
            <>
              {(label || explanation) && (
                <Flex align="center" gap={4} css={{ fill: '$gray9' }}>
                  <FormLabel isErrored={!!error}>
                    {label}{' '}
                    {required && <span style={{ color: 'red' }}>*</span>}
                  </FormLabel>

                  {explanation && <InfoIcon explanation={explanation} />}
                </Flex>
              )}
            </>

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
