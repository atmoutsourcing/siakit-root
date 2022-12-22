import * as yup from 'yup'

import { Button } from '@siakit/button'
import { Form, DatePicker, useForm } from '@siakit/form-unform'
import { Flex } from '@siakit/layout'

const testFormSchema = yup.object({
  teste: yup.string().required().nullable(),
})

type TestFormInputs = {
  teste: string
}

export function TestPage() {
  const { formRef, handleSubmit } = useForm<TestFormInputs>({
    formSchema: testFormSchema,
  })

  function handleSubmitData(data: any) {
    console.log(data)
  }

  return (
    <Form ref={formRef} onSubmit={() => handleSubmit(handleSubmitData)}>
      <DatePicker name="teste" label="teste" placeholder="teste" />

      <Flex>
        <Button
          type="button"
          onClick={() =>
            formRef.current?.setFieldValue('teste', new Date(1997, 5, 21))
          }
        >
          set value
        </Button>
        <Button type="submit">submit</Button>
      </Flex>
    </Form>
  )
}
