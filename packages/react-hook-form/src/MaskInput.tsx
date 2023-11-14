import { Controller, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  MaskInput as MaskInputComponent,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'
import { MaskType } from '@siakit/mask'

import { InfoIcon } from './components/InfoIcon'
import { get } from './get'

interface MaskInputProps {
  name: string
  mask: MaskType
  label?: string
  placeholder?: string
  onChange?: (value: string) => void
  disabled?: boolean
  explanation?: string
}

export function MaskInput({
  name,
  mask,
  label,
  placeholder,
  onChange,
  disabled,
  explanation,
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
          <>
            {(label || explanation) && (
              <Flex align="center" gap={4} css={{ fill: '$gray9' }}>
                <FormLabel isErrored={!!error}>{label}</FormLabel>

                {explanation && <InfoIcon explanation={explanation} />}
              </Flex>
            )}
          </>

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
