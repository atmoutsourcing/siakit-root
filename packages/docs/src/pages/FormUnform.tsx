import { useRef } from 'react'

import { Search, Mail } from 'lucide-react'

import { Button } from '@siakit/button'
import { Card } from '@siakit/card'
import { Footer, FooterLeft } from '@siakit/footer'
import {
  Form,
  FormHandles,
  TextInput,
  NumberInput,
  Switch,
} from '@siakit/form-unform'
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
                leftIcon={<Search />}
                // leftIcon={
                //   <svg
                //     xmlns="http://www.w3.org/2000/svg"
                //     fill="none"
                //     viewBox="0 0 24 24"
                //     strokeWidth="1.5"
                //     stroke="currentColor"
                //     className="w-6 h-12"
                //   >
                //     <path
                //       strokeLinecap="round"
                //       strokeLinejoin="round"
                //       d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 5.5 5.5a7.5 7.5 0 0 0 11.15 11.15z"
                //     />
                //   </svg>
                // }
                name="text-input"
                label="Text input"
                placeholder="Text input"
                explanation="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vero cum error reprehenderit voluptates enim iste. Rem, quam vel? Eos, optio. Nam nihil consectetur quaerat quo doloremque ea in ipsam."
              />

              <NumberInput
                name="number-input"
                label="Number input"
                placeholder="Number input"
              />

              <Switch
                name="number-input"
                label="Number input"
                explanation="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vero cum error reprehenderit voluptates enim iste. Rem, quam vel? Eos, optio. Nam nihil consectetur quaerat quo doloremque ea in ipsam."
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
