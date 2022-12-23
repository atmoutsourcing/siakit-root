import * as yup from 'yup'

import { Button } from '@siakit/button'
import { Footer } from '@siakit/footer'
import { Form, Select, useForm } from '@siakit/form-unform'
import { Flex } from '@siakit/layout'

const testFormSchema = yup.object({
  state: yup.string(),
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
        <Select
          name="state"
          label="select"
          placeholder="select"
          options={[
            { value: 1, label: 'value 1' },
            { value: 2, label: 'value 2' },
          ]}
        />

        <Footer>
          <Button
            type="button"
            onClick={() => formRef.current?.setData({ state: 1 })}
          >
            set value
          </Button>
          <Button type="submit">change value</Button>
        </Footer>
      </Form>
    </Flex>
  )
}
