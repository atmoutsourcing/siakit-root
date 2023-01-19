import * as yup from 'yup'

import { Button } from '@siakit/button'
import { Footer } from '@siakit/footer'
import { Form, RichTextInput, useForm } from '@siakit/form-unform'
import { Flex } from '@siakit/layout'

const testFormSchema = yup.object({
  coord: yup.object({
    lat: yup.number(),
    lng: yup.number(),
  }),
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
        <Flex height={400}>
          <RichTextInput
            name="description"
            label="Description"
            placeholder="Description"
          />
        </Flex>

        <Footer>
          <Button type="button" onClick={() => formRef.current?.reset()}>
            clear
          </Button>
          <Button
            type="button"
            onClick={() =>
              formRef.current?.setData({
                description: '<b>teste</b>',
              })
            }
          >
            set value
          </Button>
          <Button type="submit">change value</Button>
        </Footer>
      </Form>
    </Flex>
  )
}
