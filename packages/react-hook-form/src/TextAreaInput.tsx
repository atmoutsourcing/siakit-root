import { Controller, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  TextAreaInput as TextAreaInputComponent,
} from '@siakit/form-components'

import { get } from './get'

interface TextAreaInputProps {
  name: string
  label?: string
  placeholder?: string
  onChange?: (value: string) => void
}

export function TextAreaInput({
  name,
  label,
  placeholder,
  onChange,
}: TextAreaInputProps) {
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
            <TextAreaInputComponent
              value={field.value}
              onChange={(value) => {
                field.onChange(value)

                if (onChange) {
                  onChange(value)
                }
              }}
              placeholder={placeholder}
            />
          </>
        )}
      />
    </FormControl>
  )
}
