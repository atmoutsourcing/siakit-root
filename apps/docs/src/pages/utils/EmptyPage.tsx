import { Empty } from '@siakit/empty'
import { Flex } from '@siakit/layout'

export function EmptyPage() {
  return (
    <Flex>
      <Empty
        title="No projects"
        description="Get started by creating a new project"
        onClick={() => alert('create new project')}
        buttonText="New project"
      />
    </Flex>
  )
}
