import { useEffect, useState } from 'react'

import GoogleMapReact, { MapOptions } from 'google-map-react'

import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

import { Marker } from './Marker'

export type Coordinates = {
  lat: number
  lng: number
}

const options: MapOptions = {
  streetViewControl: true,
  disableDefaultUI: false,
  mapTypeControl: true,
}

interface MapsProps {
  coordinates: Coordinates | undefined
  onCoordinatesChange: (coordinates: Coordinates) => void
  apiKey: string
  defaultCenter?: Coordinates
  defaultZoom?: number
}

export function Maps({
  coordinates,
  onCoordinatesChange,
  apiKey,
  defaultCenter,
  defaultZoom = 12,
}: MapsProps) {
  const [value, setValue] = useState<Coordinates | undefined>(coordinates)

  useEffect(() => {
    setValue(coordinates)
  }, [coordinates])

  function handleClick(value: GoogleMapReact.ClickEventValue) {
    const { lat, lng } = value

    onCoordinatesChange({ lat, lng })
  }

  if (!apiKey) {
    return (
      <Flex flex>
        <Text>it is not possible to show google maps without the api Key</Text>
      </Flex>
    )
  }

  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: apiKey,
      }}
      defaultCenter={defaultCenter}
      defaultZoom={defaultZoom}
      options={options}
      center={value}
      onClick={handleClick}
    >
      {value?.lat && value.lng && <Marker lat={value?.lat} lng={value?.lng} />}
    </GoogleMapReact>
  )
}
