import { useRef } from 'react'

import { Button } from '@siakit/button'
import { Card } from '@siakit/card'
import { Footer, FooterLeft } from '@siakit/footer'
import { DatePicker, Form, FormHandles } from '@siakit/form-unform'
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
          <Flex padding>
            <DatePicker name="date" label="Date" placeholder="Date" />
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
