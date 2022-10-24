import { useState } from 'react'

import { Card } from '@siakit/card'
import { Flex } from '@siakit/layout'
import { Tabs, TabsList, TabsItem, TabsContent } from '@siakit/tabs'
import { Text } from '@siakit/text'

export function TabsPage() {
  const [item, setItem] = useState('item1')

  return (
    <Flex flex>
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
          <Card flex margin padding>
            <Text>item 1</Text>
          </Card>
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
