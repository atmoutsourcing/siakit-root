import { Flex } from '@siakit/layout'
import { Spacer } from '@siakit/spacer'
import { Text } from '@siakit/text'

export function SpacerPage() {
  return (
    <Flex direction="column">
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eaque
        placeat fugiat distinctio ea, nesciunt quam eveniet optio non molestiae
        assumenda quasi et, maxime praesentium reiciendis cupiditate omnis
        dolorum ipsum.
      </Text>
      <Spacer height={128} />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eaque
        placeat fugiat distinctio ea, nesciunt quam eveniet optio non molestiae
        assumenda quasi et, maxime praesentium reiciendis cupiditate omnis
        dolorum ipsum.
      </Text>
    </Flex>
  )
}
