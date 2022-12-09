import { Empty } from '@siakit/empty'
import { Flex } from '@siakit/layout'

export function EmptyPage() {
  return (
    <Flex flex>
      <Empty
        title="title"
        description="description"
        onClick={() => console.log('console')}
        buttonText="new item"
      />
    </Flex>
  )
}
