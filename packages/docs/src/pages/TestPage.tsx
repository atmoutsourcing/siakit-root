import { useRef } from 'react'

import { Button } from '@siakit/button'
import { Form, FormHandles, DateRangePicker } from '@siakit/form-unform'
import { Flex } from '@siakit/layout'

export function TestPage() {
  const formRef = useRef<FormHandles>(null)

  function handleSubmit(data: any) {
    console.log(data)
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <DateRangePicker name="teste" label="teste" placeholder="teste" />

      <Flex>
        <Button
          type="button"
          onClick={() =>
            formRef.current?.setFieldValue('teste', {
              from: new Date(1997, 5, 21),
              to: new Date(1997, 5, 27),
            })
          }
        >
          set value
        </Button>
        <Button type="submit">submit</Button>
      </Flex>
    </Form>
  )
}
