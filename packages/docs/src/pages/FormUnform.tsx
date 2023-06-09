import { useRef } from 'react'

import { Button } from '@siakit/button'
import { Card } from '@siakit/card'
import { Footer, FooterLeft } from '@siakit/footer'
import { Form, FormHandles, TextInput, NumberInput } from '@siakit/form-unform'
import { Flex } from '@siakit/layout'

export function FormUnform() {
  const formRef = useRef<FormHandles>(null)

  function handleSubmit(data: any) {
    console.log(data)
  }

  function handleResetForm() {
    formRef.current?.reset()
  }

  return (
    <Flex flex direction="column" padding>
      <Card>
        <Form ref={formRef} onSubmit={handleSubmit} flex>
          <Flex flex padding gap>
            <Flex flex direction="column" gap>
              <TextInput
                name="text-input"
                label="Text input"
                placeholder="Text input"
              />
              <NumberInput
                name="number-input"
                label="Number input"
                placeholder="Number input"
              />
            </Flex>

            <Flex flex direction="column"></Flex>

            <Flex flex direction="column"></Flex>
          </Flex>

          <Footer>
            <FooterLeft>
              <Button
                type="button"
                onClick={handleResetForm}
                variant="secondary"
              >
                Reset
              </Button>
            </FooterLeft>

            <Button type="submit">Submit</Button>
          </Footer>
        </Form>
      </Card>
    </Flex>
  )
}
