import { Coordinates } from '.'

type GeocodingData = {
  address: string
  number: number | string
  neighborhood: string
  city: string
  uf: string
  zipCode: number | string
}

interface GeocodingProps {
  data: GeocodingData
  apiKey: string
}

export async function geocoding({
  data,
  apiKey,
}: GeocodingProps): Promise<Coordinates> {
  const { address, number, neighborhood, city, uf, zipCode } = data

  const result = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}, ${number}, ${neighborhood}, ${city}, ${uf} - ${zipCode}&key=${apiKey}`,
  )

  const response = await result.json()

  return response?.results[0]?.geometry?.location ?? { lat: 0, lng: 0 }
}
