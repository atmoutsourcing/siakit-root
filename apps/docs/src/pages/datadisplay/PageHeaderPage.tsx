import { Flex } from '@siakit/layout'
import { PageHeader } from '@siakit/page-header'
import { Text } from '@siakit/text'

export function PageHeaderPage() {
  return (
    <Flex direction="column">
      <PageHeader title="title">
        <Text>page header</Text>
      </PageHeader>
    </Flex>
  )
}
