import { useRef } from 'react'

import { Form, MaskInput, FormHandles } from '@siakit/form-unform'

export function TestPage() {
  const formRef = useRef<FormHandles>(null)

  function handleSubmit(data: any) {
    console.log(data)
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <MaskInput name="test" label="Test" placeholder="Test" mask="time" />
    </Form>
  )
}
