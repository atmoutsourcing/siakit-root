import { useState } from 'react'

import { Flex } from '@siakit/layout'
import { Table } from '@siakit/table'
import { Tabs, TabsList, TabsItem, TabsContent } from '@siakit/tabs'
import { Text } from '@siakit/text'

export function TabsPage() {
  const [item, setItem] = useState('item1')

  return (
    <Flex flex overflow>
      <Tabs value={item} onValueChange={setItem}>
        <TabsList>
          <TabsItem value="item1">item 1</TabsItem>
          <TabsItem value="item2" disabled badge={12}>
            item 2
          </TabsItem>
          <TabsItem value="item3" badge={32}>
            item 3
          </TabsItem>
        </TabsList>

        <TabsContent value="item1">
          <Flex overflow>
            <Table
              headers={[
                {
                  label: 'name',
                  dataIndex: 'name',
                },
              ]}
              data={new Array(100).fill('asd').map((item) => ({ name: item }))}
            />
          </Flex>
        </TabsContent>

        <TabsContent value="item2">
          <Text>item 2</Text>
        </TabsContent>

        <TabsContent value="item3">
          <Text>item 3</Text>
        </TabsContent>
      </Tabs>
    </Flex>
  )
}
