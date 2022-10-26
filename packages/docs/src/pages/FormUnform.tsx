import { useRef } from 'react'

import * as yup from 'yup'

import { Button } from '@siakit/button'
import { Card } from '@siakit/card'
import { Footer } from '@siakit/footer'
import {
  getValidationErrors,
  Form,
  FormHandles,
  Select,
  SelectMulti,
  TextInput,
  MaskInput,
  MoneyInput,
  NumberInput,
  PasswordInput,
  PercentageInput,
  PhoneInput,
  ColorPicker,
  DatePicker,
  TextAreaInput,
  Switch,
  Radio,
  Checkbox,
  Slider,
  TimePicker,
} from '@siakit/form-unform'
import { Flex } from '@siakit/layout'

export function FormUnform() {
  const formRef = useRef<FormHandles>(null)

  async function handleSubmit(data: { fruit: string }) {
    try {
      formRef.current?.setErrors({})

      // await formSchema.validate(data, {
      //   abortEarly: false,
      // })

      console.log(data)
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)
      }
    }
  }

  return (
    <Card margin>
      <Form ref={formRef} onSubmit={handleSubmit} flex>
        <Flex direction="column" padding gap={8}>
          <Flex gap={8}>
            <TextInput
              name="text-input"
              label="Text input"
              placeholder="Text input"
            />
            <Select
              name="fruit"
              options={[{ value: 1, label: 'apple' }]}
              label="Fruit"
              placeholder="Select a fruit"
            />
            <SelectMulti
              name="fruits"
              options={[
                { value: 1, label: 'apple' },
                { value: 2, label: 'banana' },
              ]}
              label="Fruit"
              placeholder="Select a fruit"
            />
          </Flex>
          <Flex gap={8}>
            <MaskInput
              name="mask-input"
              label="mask input"
              placeholder="mask input"
              mask="cpf"
            />
            <PasswordInput
              name="password-input"
              label="password input"
              placeholder="password input"
            />
            <MoneyInput
              name="money-input"
              label="money input"
              placeholder="money input"
            />
          </Flex>
          <Flex gap={8}>
            <NumberInput
              name="number-input"
              label="number input"
              placeholder="number input"
            />
            <PercentageInput
              name="percentage-input"
              label="percentage input"
              placeholder="percentage input"
            />
            <PhoneInput
              name="phone-input"
              label="phone input"
              placeholder="phone input"
            />
          </Flex>
          <Flex gap={8}>
            <ColorPicker name="color-picker" label="Color picker" />
            <DatePicker
              name="date-picker"
              label="Date picker"
              placeholder="Date picker"
            />
            <TextAreaInput
              name="text-area"
              label="Text area"
              placeholder="Text area"
            />
          </Flex>
          <Flex gap={8}>
            <Switch name="switch-picker" label="Switch picker" />
            <Radio
              name="radio-picker"
              options={[
                { value: 'option1', label: 'option 1' },
                { value: 'option2', label: 'option 2' },
                { value: 'option3', label: 'option 3' },
              ]}
              label="radio picker"
            />
            <Checkbox
              name="checkbox-picker"
              options={[
                { value: 1, label: 'option 1' },
                { value: 2, label: 'option 2' },
                { value: 3, label: 'option 3' },
              ]}
              label="checkbox picker"
            />
          </Flex>
          <Flex gap={8}>
            <Slider name="slider" label="Slider input" />
            <TimePicker
              name="time-picker"
              label="Time picker"
              placeholder="Time picker"
            />
          </Flex>
        </Flex>

        <Footer>
          <Button type="submit">send</Button>
        </Footer>
      </Form>
    </Card>
  )
}
