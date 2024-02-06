import { InputHTMLAttributes, useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  MaskInput as MaskInputComponent,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'
import { MaskType } from '@siakit/mask'
import { useField } from '@unform/core'

import { InfoIcon } from './components/InfoIcon'

type MaskInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  name: string
  mask: MaskType
  label?: string
  onChange?: (value: string) => void
  explanation?: string
}

export function MaskInput({
  name,
  mask,
  label,
  onChange,
  explanation,
  ...props
}: MaskInputProps) {
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [fieldValue, setFieldValue] = useState(defaultValue ?? '')

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => {
        return fieldValue
      },
      setValue: (_, value) => {
        setFieldValue(value ?? '')
      },
      clearValue: () => {
        setFieldValue('')
      },
    })
  }, [fieldName, registerField, fieldValue])

  function handleChange(value: string) {
    setFieldValue(value)

    if (onChange) {
      onChange(value)
    }
  }

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

      <MaskInputComponent
        mask={mask}
        value={fieldValue}
        onChange={handleChange}
        {...props}
      />
    </FormControl>
  )
}
