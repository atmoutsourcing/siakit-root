import { Card, CardHeader } from '@siakit/card'
import { Flex } from '@siakit/layout'
import {
  Tabs as TabsComponent,
  TabsContent,
  TabsItem,
  TabsList,
} from '@siakit/tabs'
import { Text } from '@siakit/text'

export function Tabs() {
  return (
    <Flex flex>
      <TabsComponent defaultValue="item-1">
        <TabsList>
          <TabsItem value="item-1">Item-1</TabsItem>
          <TabsItem value="item-2">Item-2</TabsItem>
        </TabsList>

        <TabsContent value="item-1">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            minus nesciunt inventore quia, voluptatum totam cumque natus
            voluptate ratione sunt eos vel facere expedita accusamus doloremque?
            Exercitationem cumque vitae placeat?
          </Text>
        </TabsContent>

        <TabsContent value="item-2"></TabsContent>
      </TabsComponent>
      <Card direction="column">
        <CardHeader title="Title" />
      </Card>
    </Flex>
  )
}
