import { FormProvider, useForm } from 'react-hook-form'

import { Flex } from '@siakit/layout'
import { TextInput } from '@siakit/react-hook-form'

export function ReactHookForm() {
  const form = useForm()

  return (
    <Flex flex padding>
      <FormProvider {...form}>
        <TextInput
          name="name"
          label="Label"
          placeholder="Label"
          explanation="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem beatae amet ratione quis numquam debitis maiores. Architecto illo, tenetur enim placeat saepe et quod aliquid soluta doloremque maxime, dolores odit."
        />
      </FormProvider>
    </Flex>
  )
}
