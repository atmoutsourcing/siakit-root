import { Avatar } from '@siakit/avatar'
import { Flex } from '@siakit/layout'

export function AvatarPage() {
  return (
    <Flex align="center" gap>
      <Avatar name="Bruno Fabre" size="xs" />
      <Avatar name="Bruno Fabre" size="sm" />
      <Avatar name="Bruno Fabre" size="md" />
      <Avatar name="Bruno Fabre" size="lg" />
      <Avatar name="Bruno Fabre" size="xl" />
      <Avatar name="Bruno Fabre" size="2xl" />
      <Avatar name="Bruno Fabre" size="3xl" />
    </Flex>
  )
}
