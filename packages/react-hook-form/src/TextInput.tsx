import { Controller, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  TextInput as TextInputComponent,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'

import { InfoIcon } from './components/InfoIcon'
import { get } from './get'

interface TextInputProps {
  name: string
  label?: string
  required?: boolean
  placeholder?: string
  onChange?: (value: string) => void
  disabled?: boolean
  explanation?: string
}

export function TextInput({
  name,
  label,
  required,
  placeholder,
  onChange,
  disabled,
  explanation,
}: TextInputProps) {
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

          <TextInputComponent
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
