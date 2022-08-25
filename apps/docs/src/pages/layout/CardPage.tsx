import { Card } from '@siakit/card'
import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

export function CardPage() {
  return (
    <Flex padding direction="column">
      <Card padding>
        <Text>card component</Text>
      </Card>
    </Flex>
  )
}
