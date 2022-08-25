import { House } from 'phosphor-react'

import { IconButton } from '@siakit/icon-button'
import { Flex } from '@siakit/layout'

export function IconButtonPage() {
  return (
    <Flex>
      <IconButton type="button" icon={<House weight="bold" />} />
    </Flex>
  )
}
