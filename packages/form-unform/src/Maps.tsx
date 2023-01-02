import { useEffect, useState } from 'react'

import {
  Coordinates,
  FormControl,
  FormLabel,
  Maps as MapsComponent,
} from '@siakit/form-components'
import { useField } from '@unform/core'

type MapsProps = {
  name: string
  defaultCenter: Coordinates
  apiKey: string
  label?: string
  onChange?: (value: Coordinates) => void
  defaultZoom?: number
}

export function Maps({
  name,
  label,
  onChange,
  defaultCenter,
  apiKey,
  defaultZoom = 12,
}: MapsProps) {
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [fieldValue, setFieldValue] = useState<Coordinates | undefined>(
    defaultValue,
  )

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => {
        return fieldValue ?? undefined
      },
      setValue: (_, value) => {
        setFieldValue(value)
      },
      clearValue: () => {
        setFieldValue(undefined)
      },
    })
  }, [fieldName, registerField, fieldValue])

  function handleChange(value: Coordinates) {
    setFieldValue(value)

    if (onChange) {
      onChange(value)
    }
  }

  return (
    <FormControl error={error}>
      <>{!!label && <FormLabel isErrored={!!error}>{label}</FormLabel>}</>

      <MapsComponent
        coordinates={fieldValue}
        onCoordinatesChange={handleChange}
        defaultCenter={defaultCenter}
        apiKey={apiKey}
        defaultZoom={defaultZoom}
      />
    </FormControl>
  )
}
