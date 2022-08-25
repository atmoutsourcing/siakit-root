import { Accordion, AccordionItem } from '@siakit/accordion'
import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

export function AccordionPage() {
  return (
    <Flex>
      <Accordion type="single">
        <AccordionItem
          value="first"
          title="Title 1"
          badge={{
            label: 'Teste',
            color: 'grass',
          }}
        >
          <Flex direction="column" padding>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
              incidunt iure molestiae sit reiciendis fugiat explicabo. Dolorum,
              laudantium odio, nam veritatis laborum enim nihil, eaque modi
              nostrum quod quaerat optio.
            </Text>
          </Flex>
        </AccordionItem>

        <AccordionItem value="second" title="Title 1">
          <Flex direction="column" padding>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
              incidunt iure molestiae sit reiciendis fugiat explicabo. Dolorum,
              laudantium odio, nam veritatis laborum enim nihil, eaque modi
              nostrum quod quaerat optio.
            </Text>
          </Flex>
        </AccordionItem>
      </Accordion>
    </Flex>
  )
}
