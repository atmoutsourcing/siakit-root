import * as yup from 'yup'

import { Button } from '@siakit/button'
import { Footer } from '@siakit/footer'
import { Form, TextInput, useForm } from '@siakit/form-unform'
import { Flex } from '@siakit/layout'

const testFormSchema = yup.object({
  name: yup.string(),
})

export function TestPage() {
  const { formRef, handleSubmit } = useForm({
    formSchema: testFormSchema,
  })

  function submit(data: any) {
    console.log(data)
  }

  return (
    <Flex direction="column" gap padding>
      <Form ref={formRef} onSubmit={() => handleSubmit(submit)}>
        <TextInput name="name" label="name" placeholder="name" />

        <Footer>
          <Button
            type="button"
            onClick={() => formRef.current?.setData({ name: null })}
          >
            set value
          </Button>
          <Button type="submit">change value</Button>
        </Footer>
      </Form>
    </Flex>
  )
}
