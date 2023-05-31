import { ReactNode } from 'react'

import { Heading } from '@siakit/heading'
import { Flex } from '@siakit/layout'

type CardHeaderProps = {
  title?: string
  children?: ReactNode
}

export function CardHeader({ title, children }: CardHeaderProps) {
  return (
    <Flex
      as="header"
      justify="between"
      padding="0 8px"
      height={40}
      css={{ borderBottom: '1px solid $gray4' }}
    >
      <Flex flex padding="0 8px" align="center">
        {!!title && (
          <Heading size="xxs" weight="medium">
            {title}
          </Heading>
        )}
      </Flex>

      {children}
    </Flex>
  )
}
