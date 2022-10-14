import { Button } from '@siakit/button'
import { Card } from '@siakit/card'
import {
  getValidationErrors,
  Form,
  FormHandles,
  TextInput,
} from '@siakit/form-unform'
import { Flex } from '@siakit/layout'
import { Footer } from '@siakit/footer'
import { useRef } from 'react'
import * as yup from 'yup'

const formSchema = yup.object({
  test: yup.string().required(),
})

export function FormUnform() {
  const formRef = useRef<FormHandles>(null)

  async function handleSubmit(data: { test: string; test2: string }) {
    try {
      formRef.current?.setErrors({})

      await formSchema.validate(data, {
        abortEarly: false,
      })

      console.log(data)
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)
      }
    }
  }

  return (
    <Card margin>
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        flex
        initialData={{ test: 'bruno' }}
      >
        <Flex direction="column" padding>
          <Flex gap={8}>
            <TextInput name="test" label="test" placeholder="test" />
            <TextInput name="test2" label="test" placeholder="test" />
          </Flex>
        </Flex>

        <Footer>
          <Button type="submit">send</Button>
        </Footer>
      </Form>
    </Card>
  )
}