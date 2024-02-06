import { useEffect, useState } from 'react'

import {
  Coordinates,
  FormControl,
  FormLabel,
  Maps as MapsComponent,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'
import { useField } from '@unform/core'

import { InfoIcon } from './components/InfoIcon'

type MapsProps = {
  name: string
  defaultCenter: Coordinates
  apiKey: string
  label?: string
  onChange?: (value: Coordinates) => void
  defaultZoom?: number
  explanation?: string
}

export function Maps({
  name,
  label,
  onChange,
  defaultCenter,
  apiKey,
  defaultZoom = 12,
  explanation,
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
      <>
        {(label || explanation) && (
          <Flex align="center" gap={4} css={{ fill: '$gray9' }}>
            <FormLabel isErrored={!!error}>{label}</FormLabel>

            {explanation && <InfoIcon explanation={explanation} />}
          </Flex>
        )}
      </>

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
