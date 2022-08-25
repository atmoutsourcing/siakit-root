import { Button } from '@siakit/button'
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@siakit/hover-card'
import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

export function HoverCardPage() {
  return (
    <Flex direction="column">
      <Flex>
        <HoverCard>
          <HoverCardTrigger>
            <Button type="button">Hover card</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <Flex padding>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                aperiam porro pariatur eos est quaerat repudiandae, excepturi
                eveniet veniam saepe? Reiciendis, illo pariatur. Laboriosam sit
                illum distinctio dignissimos dolore magnam.
              </Text>
            </Flex>
          </HoverCardContent>
        </HoverCard>
      </Flex>
    </Flex>
  )
}
