import * as SiakitAccordion from '@siakit/accordion'
import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

export function Accordion() {
  return (
    <Flex>
      <SiakitAccordion.Accordion type="multiple">
        <SiakitAccordion.AccordionItem
          value="one"
          title="teste"
          badge={{ label: '123', color: 'indigo' }}
        >
          <Flex direction="column" padding>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
              asperiores? Rerum fugiat doloribus debitis delectus fugit! Eos,
              odio illum aperiam delectus sit error impedit officiis maiores
              nemo, quasi, ad consequuntur.
            </Text>
          </Flex>
        </SiakitAccordion.AccordionItem>

        <SiakitAccordion.AccordionItem
          value="two"
          title={<Flex>Title here</Flex>}
        >
          <Flex direction="column" padding>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
              asperiores? Rerum fugiat doloribus debitis delectus fugit! Eos,
              odio illum aperiam delectus sit error impedit officiis maiores
              nemo, quasi, ad consequuntur.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
              asperiores? Rerum fugiat doloribus debitis delectus fugit! Eos,
              odio illum aperiam delectus sit error impedit officiis maiores
              nemo, quasi, ad consequuntur.
            </Text>
          </Flex>
        </SiakitAccordion.AccordionItem>

        <SiakitAccordion.AccordionItem value="three" title="teste">
          <Flex direction="column" padding>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
              asperiores? Rerum fugiat doloribus debitis delectus fugit! Eos,
              odio illum aperiam delectus sit error impedit officiis maiores
              nemo, quasi, ad consequuntur.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
              asperiores? Rerum fugiat doloribus debitis delectus fugit! Eos,
              odio illum aperiam delectus sit error impedit officiis maiores
              nemo, quasi, ad consequuntur.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
              asperiores? Rerum fugiat doloribus debitis delectus fugit! Eos,
              odio illum aperiam delectus sit error impedit officiis maiores
              nemo, quasi, ad consequuntur.
            </Text>
          </Flex>
        </SiakitAccordion.AccordionItem>
      </SiakitAccordion.Accordion>
    </Flex>
  )
}
