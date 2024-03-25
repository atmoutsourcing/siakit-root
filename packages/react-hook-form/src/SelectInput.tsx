import { Controller, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  Select as SelectComponent,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'

import { InfoIcon } from './components/InfoIcon'
import { get } from './get'

type OptionType = {
  value: any
  label: string
}

function findOption(value: any, options: OptionType[]) {
  const option = options.find((item) => item.value === value)

  if (option) {
    return option
  }

  return null
}

interface SelectProps {
  name: string
  label?: string
  required?: boolean
  placeholder?: string
  options: OptionType[]
  onChange?: (value: any) => void
  disabled?: boolean
  explanation?: string
}

export function Select({
  name,
  label,
  required,
  placeholder,
  options = [],
  onChange,
  disabled,
  explanation,
}: SelectProps) {
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

          <SelectComponent
            value={findOption(field.value, options)}
            onChange={(option) => {
              const newValue = option?.value
              field.onChange(newValue)

              if (onChange) {
                onChange(newValue)
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
