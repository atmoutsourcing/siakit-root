import { FormProvider, useForm } from 'react-hook-form'

import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@siakit/button'
import { Card } from '@siakit/card'
import { Footer, FooterLeft } from '@siakit/footer'
import { Flex } from '@siakit/layout'
import {
  TextInput,
  Select,
  DatePicker,
  MoneyInput,
  NumberInput,
  PasswordInput,
  PercentageInput,
  PhoneInput,
  Switch,
  TextAreaInput,
  MaskInput,
} from '@siakit/react-hook-form'

const testFormSchema = z.object({
  name: z.string().nonempty(),
  state: z.string().nonempty(),
  birthday: z.date(),
  money: z.number(),
  age: z.number(),
  password: z.string().nonempty(),
  percentage: z.number(),
  phone: z.string().nonempty(),
  giant: z
    .boolean()
    .optional()
    .transform((val) => !!val),
  bio: z.string().nonempty(),
  cpf: z.string().nonempty(),
})

type TestFormData = z.infer<typeof testFormSchema>

export function ReactHookForm() {
  const testForm = useForm<TestFormData>({
    resolver: zodResolver(testFormSchema),
  })
  const { handleSubmit, reset } = testForm

  function submitForm(data: any) {
    console.log(data)
  }

  function handleReset() {
    reset({
      name: undefined,
    })
  }

  function handleSetValues() {
    reset({
      name: 'John Doe',
      state: 'SP',
      birthday: new Date(1980, 2, 4),
      money: 59.9,
      age: 25,
      password: 'abcd1234',
      percentage: 67,
      phone: '(19) 99999-9999',
      giant: true,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia nihil recusandae excepturi doloremque commodi non earum ipsa facere eos. Cum aut asperiores ab ipsa nam magni accusantium quis soluta. Nesciunt.',
      cpf: '468.131.658-01',
    })
  }

  return (
    <Flex flex align="center" justify="center">
      <FormProvider {...testForm}>
        <Card as="form" onSubmit={handleSubmit(submitForm)} gap>
          <Flex direction="column" padding width={512} gap={8}>
            <TextInput name="name" label="Name" placeholder="Name" />
            <Select
              name="state"
              label="State"
              placeholder="State"
              options={[
                { value: 'SP', label: 'São Paulo' },
                { value: 'RJ', label: 'Rio de Janeiro' },
              ]}
            />
            <DatePicker
              name="birthday"
              label="Birthday"
              placeholder="Birthday"
            />
            <MoneyInput name="money" label="Money" placeholder="Money" />
            <NumberInput name="age" label="Age" placeholder="Age" />
            <PasswordInput
              name="password"
              label="Password"
              placeholder="Password"
            />
            <PercentageInput
              name="percentage"
              label="Percentage"
              placeholder="Percentage"
            />
            <PhoneInput name="phone" label="Phone" placeholder="Phone" />
            <Switch name="giant" label="Giant?" />
            <TextAreaInput name="bio" label="Bio" placeholder="Bio" />
            <MaskInput name="cpf" label="CPF" placeholder="CPF" mask="cpf" />
          </Flex>

          <Footer>
            <FooterLeft>
              <Button
                type="button"
                variant="secondary"
                colorScheme="red"
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={handleSetValues}
              >
                Set values
              </Button>
            </FooterLeft>
            <Button type="submit">Submit </Button>
          </Footer>
        </Card>
      </FormProvider>
    </Flex>
  )
}
