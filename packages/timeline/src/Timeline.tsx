import { ReactNode } from 'react'

import { Flex } from '@siakit/layout'

type TimelineProps = {
  children: ReactNode
}

export function Timeline({ children }: TimelineProps) {
  return (
    <Flex direction="column" gap={8}>
      {children}
    </Flex>
  )
}
