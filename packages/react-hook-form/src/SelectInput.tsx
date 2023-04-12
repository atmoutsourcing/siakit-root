import { Controller, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  Select as SelectComponent,
} from '@siakit/form-components'

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
  placeholder?: string
  options: OptionType[]
  onChange?: (value: any) => void
}

export function Select({
  name,
  label,
  placeholder,
  options = [],
  onChange,
}: SelectProps) {
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
            />
          </>
        )}
      />
    </FormControl>
  )
}
