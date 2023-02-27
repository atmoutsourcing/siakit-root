import { ComponentProps, ReactNode } from 'react'

import { Flex } from '@siakit/layout'

type TimelineProps = {
  children: ReactNode
} & ComponentProps<typeof Flex>

export function Timeline({ children, ...props }: TimelineProps) {
  return (
    <Flex direction="column" gap={8} {...props}>
      {children}
    </Flex>
  )
}
