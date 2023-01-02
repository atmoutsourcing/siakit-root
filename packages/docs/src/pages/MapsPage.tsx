import { useState } from 'react'

import { Button } from '@siakit/button'
import { Maps, Coordinates, geocoding } from '@siakit/form-components'
import { Flex } from '@siakit/layout'

export function MapsPage() {
  const [coordinates, setCoordinates] = useState<Coordinates>()

  async function handleGeocoding() {
    const coord = await geocoding({
      data: {
        address: 'Alameda das palmeiras',
        number: 240,
        neighborhood: 'gramado',
        city: 'campinas',
        uf: 'SP',
        zipCode: 13101676,
      },
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    })

    console.log(coord)
  }

  return (
    <Flex flex direction="column">
      <Flex height={400}>
        <Maps
          coordinates={coordinates}
          onCoordinatesChange={setCoordinates}
          apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
          defaultCenter={{
            lat: -22.928002,
            lng: -47.079223,
          }}
        />
      </Flex>
      <Flex justify="end" padding="16px 0">
        <Button onClick={handleGeocoding}>Geocoding</Button>
      </Flex>
    </Flex>
  )
}
