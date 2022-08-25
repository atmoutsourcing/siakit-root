import { Avatar } from '@siakit/avatar'
import { AvatarGroup } from '@siakit/avatar-group'
import { Flex } from '@siakit/layout'

export function AvatarGroupPage() {
  return (
    <Flex>
      <AvatarGroup>
        <Avatar name="a a" />
        <Avatar name="b b" />
        <Avatar name="c c" />
        <Avatar name="d d" />
        <Avatar name="e e" />
        <Avatar name="Bruno Fabre" />
        <Avatar name="g g" />
      </AvatarGroup>
    </Flex>
  )
}
