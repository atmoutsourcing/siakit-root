import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '@siakit/button'
import { Flex } from '@siakit/layout'
import { useLoading } from '@siakit/loading'
import { MoneyInput, Select, TextInput } from '@siakit/react-hook-form'

const array = Array.from({ length: 50 }).map((item, index) => ({
  value: index + 1,
  label: 'asd',
}))

export function ReactHookForm() {
  const { isLoading, setLoading } = useLoading()

  const form = useForm({
    defaultValues: {
      teste: 1,
      name: 'asdasdsadsad',
      money: 50,
    },
  })

  const { reset } = form

  useEffect(() => {
    reset({
      teste: 1,
      name: 'asdasdsadsadsadsa',
      money: 50,
    })
  }, [])

  console.log(isLoading)

  return (
    <Flex flex padding direction="column" gap>
      <Button
        onClick={() => {
          setLoading(true)

          setTimeout(() => {
            setLoading(false)
          }, 2000)
        }}
      >
        Teste
      </Button>

      <FormProvider {...form}>
        <Flex flex as="form" gap={8}>
          <MoneyInput name="money" label="Money" />

          <Select
            name="teste"
            label="Teste"
            placeholder="Selecione"
            options={array}
          />

          <TextInput
            name="name"
            label="Label"
            placeholder="Label"
            explanation="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem beatae amet ratione quis numquam debitis maiores. Architecto illo, tenetur enim placeat saepe et quod aliquid soluta doloremque maxime, dolores odit."
          />
        </Flex>
      </FormProvider>
    </Flex>
  )
}
