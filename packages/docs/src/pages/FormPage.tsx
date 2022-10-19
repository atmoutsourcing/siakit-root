import {
  FormControl,
  FormLabel,
  TextInput,
  NumberInput,
  PhoneInput,
  PasswordInput,
  MoneyInput,
  MaskInput,
  PercentageInput,
  TextareaInput,
  Switch,
  Checkbox,
  Radio,
  Select,
  SelectMulti,
  LanguagePicker,
  ColorPicker,
  Slider,
  DatePicker,
  TimePicker,
  OptionType,
} from '@siakit/form-components'
import { Card } from '@siakit/card'
import { Flex } from '@siakit/layout'
import { useState } from 'react'
import { Color } from '@siakit/core'

type FlagOptionType = {
  value: string
  label: string
  flag: string
}

export function FormPage() {
  const [textInput, setTextInput] = useState('text')
  const [numberInput, setNumberInput] = useState('123abc456')
  const [phoneInput, setPhoneInput] = useState('12345678901')
  const [passwordInput, setPasswordInput] = useState('abcd1234')
  const [moneyInput, setMoneyInput] = useState('10000')
  const [maskInput, setMaskInput] = useState('12345678912')
  const [percentageInput, setPercentageInput] = useState('75')
  const [textareaInput, setTextareaInput] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  )
  const [switchValue, setSwitchValue] = useState(true)
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [radioValue, setRadioValue] = useState('')
  const [selectValue, setSelectValue] = useState<OptionType | null>(null)
  const [selectMultiValue, setSelectMultiValue] = useState<OptionType[]>([])
  const [languagePicker, setLanguagePicker] = useState<FlagOptionType | null>(
    null,
  )
  const [colorPicker, setColorPicker] = useState<Color | null>(null)
  const [sliderValue, setSliderValue] = useState([0])
  const [datePicker, setDatePicker] = useState<Date | undefined>(new Date())
  const [timePicker, setTimePicker] = useState<number[]>([])

  console.log(textInput)
  console.log(numberInput)
  console.log(phoneInput)
  console.log(passwordInput)
  console.log(moneyInput)
  console.log(maskInput)
  console.log(percentageInput)
  console.log(textareaInput)
  console.log(switchValue)
  console.log(checkboxValue)
  console.log(radioValue)
  console.log(selectValue)
  console.log(selectMultiValue)
  console.log(languagePicker)
  console.log(colorPicker)
  console.log(sliderValue)
  console.log(datePicker)
  console.log(timePicker)

  return (
    <Card margin padding gap>
      <Flex flex direction="column" gap={8}>
        <FormControl>
          <FormLabel>Text input</FormLabel>
          <TextInput
            value={textInput}
            onChange={setTextInput}
            placeholder="Text input"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Number input</FormLabel>
          <NumberInput
            value={numberInput}
            onChange={setNumberInput}
            placeholder="Number input"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Phone input</FormLabel>
          <PhoneInput
            value={phoneInput}
            onChange={setPhoneInput}
            placeholder="Phone input"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Password input</FormLabel>
          <PasswordInput
            value={passwordInput}
            onChange={setPasswordInput}
            placeholder="Password input"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Money input</FormLabel>
          <MoneyInput
            value={moneyInput}
            onChange={setMoneyInput}
            placeholder="Money input"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Mask input (CPF)</FormLabel>
          <MaskInput
            value={maskInput}
            onChange={setMaskInput}
            placeholder="Mask input"
            mask="cpf"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Percentage input</FormLabel>
          <PercentageInput
            value={percentageInput}
            onChange={setPercentageInput}
            placeholder="Percentage input"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Textarea input</FormLabel>
          <TextareaInput
            value={textareaInput}
            onChange={setTextareaInput}
            placeholder="Textarea input"
          />
        </FormControl>
      </Flex>

      <Flex flex direction="column" gap={8}>
        <FormControl>
          <FormLabel>Switch</FormLabel>
          <Switch value={switchValue} onChange={setSwitchValue} />
        </FormControl>

        <FormControl>
          <FormLabel>Checkbox options</FormLabel>

          <Checkbox
            value={checkboxValue}
            onChange={setCheckboxValue}
            label="Option 1"
          />
          <Checkbox
            value={checkboxValue}
            onChange={setCheckboxValue}
            label="Option 2"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Radio options</FormLabel>

          <Radio
            value={radioValue}
            onChange={setRadioValue}
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
            ]}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Select options</FormLabel>

          <Select
            value={selectValue}
            onChange={setSelectValue}
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
            ]}
            placeholder="Select input"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Select multi options</FormLabel>

          <SelectMulti
            value={selectMultiValue}
            onChange={setSelectMultiValue}
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
            ]}
            placeholder="Select multi input"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Language picker</FormLabel>

          <LanguagePicker
            value={languagePicker}
            onChange={setLanguagePicker}
            placeholder="Language picker"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Color picker</FormLabel>

          <ColorPicker value={colorPicker} onChange={setColorPicker} />
        </FormControl>

        <FormControl>
          <FormLabel>Slider</FormLabel>

          <Slider value={sliderValue} onChange={setSliderValue} />
        </FormControl>

        <FormControl>
          <FormLabel>Date Picker</FormLabel>

          <DatePicker
            value={datePicker}
            onChange={setDatePicker}
            placeholder="Date picker"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Time Picker</FormLabel>

          <TimePicker
            value={timePicker}
            onChange={setTimePicker}
            placeholder="Time picker"
          />
        </FormControl>
      </Flex>
    </Card>
  )
}
