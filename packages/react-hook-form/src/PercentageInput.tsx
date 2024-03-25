import { Controller, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  PercentageInput as PercentageInputComponent,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'

import { InfoIcon } from './components/InfoIcon'
import { get } from './get'

interface PercentageInputProps {
  name: string
  label?: string
  required?: boolean
  placeholder?: string
  onChange?: (value: number | undefined) => void
  disabled?: boolean
  explanation?: string
}

export function PercentageInput({
  name,
  label,
  required,
  placeholder,
  onChange,
  disabled,
  explanation,
}: PercentageInputProps) {
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
          <>
            {(label || explanation) && (
              <Flex align="center" gap={4} css={{ fill: '$gray9' }}>
                <FormLabel isErrored={!!error}>
                  {label} {required && <span style={{ color: 'red' }}>*</span>}
                </FormLabel>

                {explanation && <InfoIcon explanation={explanation} />}
              </Flex>
            )}
          </>

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
        </FormControl>
      )}
    />
  )
}
