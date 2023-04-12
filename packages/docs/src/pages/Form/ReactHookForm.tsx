import { useForm, FormProvider } from 'react-hook-form'

import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@siakit/button'
import { Flex } from '@siakit/layout'
import {
  NumberInput,
  TextInput,
  TextAreaInput,
  MoneyInput,
  PercentageInput,
  Select,
  DatePicker,
  PhoneInput,
  Switch,
} from '@siakit/react-hook-form'

const formTestSchema = z.object({
  name: z.string().nonempty(),
  age: z.number(),
  bio: z.string().nonempty(),
  value: z.number(),
  percent: z.number(),
  car: z.string().nonempty(),
  date: z.date(),
  phone: z.string(),
  isPublic: z.coerce.boolean(),
})

type FormTestData = z.infer<typeof formTestSchema>

export function ReactHookForm() {
  const formTest = useForm<FormTestData>({
    resolver: zodResolver(formTestSchema),
  })

  const { handleSubmit, reset } = formTest

  function submitFormTest(data: FormTestData) {
    console.log(data)
  }

  return (
    <Flex padding direction="column">
      <FormProvider {...formTest}>
        <Flex
          as="form"
          onSubmit={handleSubmit(submitFormTest)}
          direction="column"
        >
          <TextInput
            name="name"
            label="Name label"
            placeholder="Name placeholder"
          />

          <NumberInput
            name="age"
            label="Age label"
            placeholder="Age placeholder"
          />

          <PercentageInput
            name="percent"
            label="Percent label"
            placeholder="Percent placeholder"
          />

          <TextAreaInput
            name="bio"
            label="Bio label"
            placeholder="Bio placeholder"
          />

          <MoneyInput
            name="value"
            label="Value label"
            placeholder="Value placeholder"
          />

          <Select
            name="car"
            label="Car label"
            placeholder="Car placeholder"
            options={[
              { value: 'gol', label: 'Gol' },
              { value: 'voyage', label: 'Voyage' },
            ]}
          />

          <DatePicker
            name="date"
            label="Date label"
            placeholder="Date placeholder"
          />

          <PhoneInput
            name="phone"
            label="Phone label"
            placeholder="Phone placeholder"
          />

          <Switch name="isPublic" label="Is public label" />

          <Button>submit</Button>
        </Flex>
      </FormProvider>

      <Button
        type="button"
        onClick={() => reset({ date: new Date('2023-04-15T03:00:00.000Z') })}
      >
        reset form
      </Button>
    </Flex>
  )
}
