import { Controller, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  DatePicker as DatePickerComponent,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'

import { InfoIcon } from './components/InfoIcon'
import { get } from './get'

interface DatePickerProps {
  name: string
  label?: string
  placeholder?: string
  onChange?: (value: Date | null) => void
  disabled?: boolean
  explanation?: string
}

export function DatePicker({
  name,
  label,
  placeholder,
  onChange,
  disabled,
  explanation,
}: DatePickerProps) {
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
                  <FormLabel isErrored={!!error}>{label}</FormLabel>

                  {explanation && <InfoIcon explanation={explanation} />}
                </Flex>
              )}
            </>

            <DatePickerComponent
              value={field?.value}
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
        )
      }}
    />
  )
}
