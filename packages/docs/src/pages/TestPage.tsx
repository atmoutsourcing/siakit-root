import * as yup from 'yup'

import { Button } from '@siakit/button'
import { Footer } from '@siakit/footer'
import { Form, Maps, useForm } from '@siakit/form-unform'
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
      <Form
        ref={formRef}
        onSubmit={() => handleSubmit(submit)}
        initialData={{
          coord: {
            lat: -20.786954,
            lng: -49.395184,
          },
        }}
      >
        <Flex height={400}>
          <Maps
            name="coord"
            label="Coordenadas"
            apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            defaultCenter={{
              lat: -22.928002,
              lng: -47.079223,
            }}
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
                coord: { lat: -23.444648, lng: -46.415758 },
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
