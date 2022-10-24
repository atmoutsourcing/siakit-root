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
      css={{ borderBottom: '1px solid $gray4' }}
    >
      <Flex padding="12px 8px" align="center">
        {!!title && (
          <Heading size="xs" weight="medium">
            {title}
          </Heading>
        )}
      </Flex>

      {children}
    </Flex>
  )
}
