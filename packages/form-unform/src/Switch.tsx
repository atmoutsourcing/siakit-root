import { useEffect, useState } from 'react'

import {
  FormControl,
  FormLabel,
  Switch as SwitchComponent,
} from '@siakit/form-components'
import { useField } from '@unform/core'

type SwitchProps = {
  name: string
  label?: string
  onChange?: (value: boolean) => void
}

export function Switch({ name, label, onChange }: SwitchProps) {
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
      <>{!!label && <FormLabel isErrored={!!error}>{label}</FormLabel>}</>

      <SwitchComponent value={fieldValue} onChange={handleChange} />
    </FormControl>
  )
}
