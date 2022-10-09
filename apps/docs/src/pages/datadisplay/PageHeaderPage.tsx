import { Flex } from '@siakit/layout'
import { PageHeader } from '@siakit/page-header'
import { Text } from '@siakit/text'

export function PageHeaderPage() {
  return (
    <Flex direction="column">
      <PageHeader title="title" onGoBack={() => alert('on go back')}>
        <Text>page header</Text>
      </PageHeader>
    </Flex>
  )
}
