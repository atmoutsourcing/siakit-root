import { Avatar } from '@siakit/avatar'
import { Flex } from '@siakit/layout'

export function AvatarPage() {
  return (
    <Flex direction="column" gap>
      <Flex gap>
        <Avatar
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHNob3R8ZW58MHx8MHx8&w=1000&q=80"
          name="John Doe"
        />

        <Avatar name="John Doe" />

        <Avatar name="John Doe" badge />
      </Flex>
      <Flex gap>
        <Avatar name="John Doe" size="xs" badge />
        <Avatar name="John Doe" size="sm" badge />
        <Avatar name="John Doe" size="md" badge />
        <Avatar name="John Doe" size="lg" badge />
        <Avatar name="John Doe" size="xl" badge />
        <Avatar name="John Doe" size="2xl" badge />
      </Flex>
    </Flex>
  )
}
