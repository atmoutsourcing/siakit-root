import { useRef } from 'react'

import { Button } from '@siakit/button'
import { Form, Select, FormHandles } from '@siakit/form-unform'

export function TestPage() {
  const formRef = useRef<FormHandles>(null)

  function handleSubmit(data: any) {
    console.log(data)
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Select
        name="test"
        label="Test"
        placeholder="Test"
        options={[
          { value: 1, label: 'teste 1' },
          { value: 2, label: 'teste 2' },
          { value: 3, label: 'teste 3' },
          { value: 4, label: 'teste 4' },
        ]}
      />

      <Button
        type="button"
        onClick={() => formRef.current?.setFieldValue('test', 2)}
      >
        set value
      </Button>
    </Form>
  )
}
