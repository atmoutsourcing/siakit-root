import { House } from 'phosphor-react'

import { Badge } from '@siakit/badge'
import { Flex } from '@siakit/layout'

export function BadgePage() {
  return (
    <Flex gap>
      <Badge color="crimson">Badge</Badge>
      <Badge color="indigo" icon={<House />}>
        Badge
      </Badge>
      <Badge color="green">Badge</Badge>
    </Flex>
  )
}
