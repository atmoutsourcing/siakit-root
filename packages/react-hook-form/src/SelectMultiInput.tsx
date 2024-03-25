import { Controller, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  SelectMulti as SelectMultiComponent,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'

import { InfoIcon } from './components/InfoIcon'
import { get } from './get'

type OptionType = {
  value: any
  label: string
}

interface SelectMultiInputProps {
  name: string
  label?: string
  required?: boolean
  placeholder?: string
  options: OptionType[]
  onChange?: (value: any) => void
  disabled?: boolean
  explanation?: string
}

export function SelectMultiInput({
  name,
  label,
  required,
  placeholder,
  options = [],
  onChange,
  disabled,
  explanation,
}: SelectMultiInputProps) {
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

          <SelectMultiComponent
            value={field.value}
            onChange={(options) => {
              field.onChange(options)

              if (onChange) {
                onChange(options)
              }
            }}
            placeholder={placeholder}
            options={options}
            disabled={disabled}
          />
        </FormControl>
      )}
    />
  )
}
