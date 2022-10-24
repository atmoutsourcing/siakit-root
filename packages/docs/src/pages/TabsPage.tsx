import { useState } from 'react'

import { Button } from '@siakit/button'
import { Flex } from '@siakit/layout'
import { Tabs, TabsList, TabsItem, TabsContent } from '@siakit/tabs'
import { Text } from '@siakit/text'

export function TabsPage() {
  const [item, setItem] = useState('')

  return (
    <Flex>
      <Button type="button" onClick={() => setItem('item2')}>
        set value
      </Button>
      <Tabs value={item} onValueChange={setItem}>
        <TabsList>
          <TabsItem value="item1">item 1</TabsItem>
          <TabsItem value="item2">item 2</TabsItem>
          <TabsItem value="item3">item 3</TabsItem>
        </TabsList>

        <TabsContent value="item1">
          <Text>item 1</Text>
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
