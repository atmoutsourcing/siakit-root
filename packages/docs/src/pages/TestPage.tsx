import { useRef } from 'react'

import { Button } from '@siakit/button'
import { Footer } from '@siakit/footer'
import { FormHandles, Form, MoneyInput } from '@siakit/form-unform'

export function TestPage() {
  const formRef = useRef<FormHandles>(null)

  return (
    <Form
      ref={formRef}
      onSubmit={(data: any) => console.log(data)}
      initialData={{
        value: '1.000,00',
      }}
    >
      <MoneyInput name="value" label="value" placeholder="value" />

      <Footer>
        <Button
          type="button"
          onClick={() => formRef.current?.setFieldValue('value', '1.000,00')}
        >
          set value
        </Button>
        <Button type="submit">send</Button>
      </Footer>
    </Form>
  )
}
