import { useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  Switch as SwitchComponent,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'
import { useField } from '@unform/core'

import { InfoIcon } from './components/InfoIcon'

type SwitchProps = {
  name: string
  label?: string
  onChange?: (value: boolean) => void
  disabled?: boolean
  explanation?: string
}

export function Switch({
  name,
  label,
  onChange,
  disabled,
  explanation,
}: SwitchProps) {
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [fieldValue, setFieldValue] = useState<boolean>(defaultValue ?? false)

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => {
        return fieldValue
      },
      setValue: (_, value) => {
        setFieldValue(value)
      },
      clearValue: () => {
        setFieldValue(false)
      },
    })
  }, [fieldName, registerField, fieldValue])

  function handleChange(value: boolean) {
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

      <SwitchComponent
        value={fieldValue}
        onChange={handleChange}
        disabled={disabled}
      />
    </FormControl>
  )
}
