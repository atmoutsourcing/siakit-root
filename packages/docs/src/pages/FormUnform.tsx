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
  RichTextInput,
  FileInput,
} from '@siakit/form-unform'
import { Flex } from '@siakit/layout'

const formSchema = yup.object({
  'text-input': yup.string().required(),
  select: yup.string().required(),
  'select-multi': yup.string().required(),
  'mask-input': yup.string().required(),
  'password-input': yup.string().required(),
  'money-input': yup.string().required(),
  'number-input': yup.string().required(),
  'percentage-input': yup.string().required(),
  'phone-input': yup.string().required(),
  'color-picker': yup.string().required(),
  'date-picker': yup.string().required(),
  'text-area-input': yup.string().required(),
  switch: yup.boolean().isTrue(),
  radio: yup.string().required(),
  checkbox: yup.string().required(),
  slider: yup.number().min(20),
  'time-picker': yup.string().required(),
  'file-input': yup.string().required(),
  'rich-text-input': yup.string().required(),
})

export function FormUnform() {
  const formRef = useRef<FormHandles>(null)

  async function handleSubmit(data: { fruit: string }) {
    try {
      formRef.current?.setErrors({})

      console.log(data)

      await formSchema.validate(data, {
        abortEarly: false,
      })

      console.log(data)
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)
      }
    }
  }

  return (
    <Flex flex overflow padding>
      <Card flex overflow direction="column">
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{
            'text-input': 'text input',
            select: 1,
            'select-multi': [2],
            'mask-input': '123.123.123-12',
            'password-input': 'abcd1234',
            'money-input': '129,90',
            'number-input': '1000',
            'percentage-input': '97',
            'phone-input': '(99) 99999-9999',
            'color-picker': 'violet',
            'date-picker': new Date(),
            'text-area-input':
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            switch: true,
            radio: 'option2',
            checkbox: {
              '1': true,
              '3': true,
            },
            slider: 14,
            'time-picker': [9, 36],
            'rich-text-input':
              '<h1>heading 1</h1><h2>heading 2</h2><h3>heading 3</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros odio, euismod id gravida vitae, consectetur vitae risus. Donec interdum tincidunt imperdiet. Vivamus tincidunt mi at hendrerit efficitur. Integer dignissim eleifend sem eu tincidunt. Integer vestibulum arcu eget cursus sagittis. Duis consectetur finibus purus, pulvinar suscipit velit fermentum ut. Ut nec est porta, maximus nulla eu, tristique lectus. Vivamus eros quam, feugiat eget est nec, tincidunt ultricies justo. Sed hendrerit eget lacus vitae posuere. Vivamus arcu diam, placerat in sagittis vel, iaculis quis lectus. Sed egestas eget lacus eget luctus.</p>',
          }}
          flex
          overflow
        >
          <Flex flex overflow direction="column" padding gap={8}>
            <Flex gap={8}>
              <TextInput
                name="text-input"
                label="Text input"
                placeholder="Text input"
                disabled
              />
              <Select
                name="select"
                options={[{ value: 1, label: 'apple' }]}
                label="Fruit"
                placeholder="Select a fruit"
                disabled
              />
              <SelectMulti
                name="select-multi"
                options={[
                  { value: 1, label: 'apple' },
                  { value: 2, label: 'banana' },
                ]}
                label="Fruit"
                placeholder="Select a fruit"
                disabled
              />
            </Flex>
            <Flex gap={8}>
              <MaskInput
                name="mask-input"
                label="mask input"
                placeholder="mask input"
                mask="cpf"
                disabled
              />
              <PasswordInput
                name="password-input"
                label="password input"
                placeholder="password input"
                disabled
              />
              <MoneyInput
                name="money-input"
                label="money input"
                placeholder="money input"
                disabled
              />
            </Flex>
            <Flex gap={8}>
              <NumberInput
                name="number-input"
                label="number input"
                placeholder="number input"
                disabled
              />
              <PercentageInput
                name="percentage-input"
                label="percentage input"
                placeholder="percentage input"
                disabled
              />
              <PhoneInput
                name="phone-input"
                label="phone input"
                placeholder="phone input"
                disabled
              />
            </Flex>
            <Flex gap={8}>
              <ColorPicker name="color-picker" label="Color picker" disabled />
              <DatePicker
                name="date-picker"
                label="Date picker"
                placeholder="Date picker"
                disabled
              />
              <TextAreaInput
                name="text-area-input"
                label="Text area"
                placeholder="Text area"
                disabled
              />
            </Flex>
            <Flex gap={8}>
              <Switch name="switch" label="Switch picker" disabled />
              <Radio
                name="radio"
                options={[
                  { value: 'option1', label: 'option 1' },
                  { value: 'option2', label: 'option 2' },
                  { value: 'option3', label: 'option 3' },
                ]}
                label="radio picker"
                disabled
              />
              <Checkbox
                name="checkbox"
                options={[
                  { value: 1, label: 'option 1' },
                  { value: 2, label: 'option 2' },
                  { value: 3, label: 'option 3' },
                ]}
                label="checkbox picker"
                disabled
              />
            </Flex>
            <Flex gap={8}>
              <Slider name="slider" label="Slider input" disabled />
              <TimePicker
                name="time-picker"
                label="Time picker"
                placeholder="Time picker"
                disabled
              />
            </Flex>
            <Flex>
              <FileInput name="file-input" multiple disabled />
            </Flex>

            <Flex gap={8}>
              <RichTextInput
                name="rich-text-input"
                label="Rich text input"
                placeholder="Rich text input"
                disabled
              />
            </Flex>
          </Flex>

          <Footer>
            <Button type="submit">send</Button>
          </Footer>
        </Form>
      </Card>
    </Flex>
  )
}
