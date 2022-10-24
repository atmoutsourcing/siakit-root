import { ReactNode } from 'react'

import { Avatar } from '@siakit/avatar'
import { Card } from '@siakit/card'
import { Flex } from '@siakit/layout'

type TimelineItemProps = {
  children: ReactNode
  name?: string
  avatarSrc?: string
}

export function TimelineItem({
  children,
  name = 'System',
  avatarSrc,
}: TimelineItemProps) {
  return (
    <Flex gap={8}>
      <Avatar name={name} src={avatarSrc} />

      <Card flex>{children}</Card>
    </Flex>
  )
}
