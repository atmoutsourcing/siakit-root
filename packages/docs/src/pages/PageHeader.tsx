import { Flex } from '@siakit/layout'
import { PageHeader as PageHeaderComponent } from '@siakit/page-header'
import { Text } from '@siakit/text'

export function PageHeader() {
  return (
    <Flex flex direction="column" padding gap>
      <PageHeaderComponent title="Title" />

      <PageHeaderComponent onGoBack={() => alert('go back')} />

      <PageHeaderComponent>
        <Flex flex justify="end">
          <Text>Children</Text>
        </Flex>
      </PageHeaderComponent>

      <PageHeaderComponent>
        <Flex flex>
          <Text>Children</Text>
        </Flex>
      </PageHeaderComponent>

      <PageHeaderComponent title="Title" onGoBack={() => alert('go back')}>
        <Flex flex justify="end">
          <Text>Children</Text>
        </Flex>
      </PageHeaderComponent>

      <PageHeaderComponent title="Title" onGoBack={() => alert('go back')}>
        <Flex flex>
          <Text>Children</Text>
        </Flex>
      </PageHeaderComponent>
    </Flex>
  )
}
