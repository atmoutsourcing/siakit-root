import { useState } from 'react'

import { toMoney } from 'vanilla-masker'

import { Text } from '@siakit/text'

import { ClearButton } from '../components/ClearButton'
import { Prefix } from '../components/Prefix'
import { InputContainer } from '../styles'

type ValueType = number | string | undefined

type MoneyInputProps = {
  placeholder?: string
  value: ValueType
  onChange: (value: string | undefined) => void
  onBlur?: (event?: React.FocusEvent<HTMLInputElement, Element>) => void
  onFocus?: (event?: React.FocusEvent<HTMLInputElement, Element>) => void
}

function maskMoneyValue(value: ValueType): string {
  if (!value) {
    return ''
  }

  return toMoney(value)
}

function MoneyInput({
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  ...props
}: MoneyInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(maskMoneyValue(value))

  function handleChange(
    event?: React.ChangeEvent<HTMLInputElement> | null,
  ): void {
    const targetValue = event?.target.value

    const maskedValue = maskMoneyValue(targetValue)

    setIsFilled(maskedValue)

    if (onChange && event) {
      onChange(maskedValue)
    }
  }

  function handleBlur(
    event?: React.FocusEvent<HTMLInputElement, Element>,
  ): void {
    setIsFocused(false)

    if (onBlur && event) {
      onBlur(event)
    }
  }

  function handleFocus(
    event?: React.FocusEvent<HTMLInputElement, Element>,
  ): void {
    setIsFocused(true)

    if (onFocus && event) {
      onFocus(event)
    }
  }

  function handleClear() {
    setIsFocused(false)
    setIsFilled('')
  }

  return (
    <InputContainer isFocused={isFocused} isFilled={!!isFilled} {...props}>
      <Prefix>
        <Text size="sm" lowContrast>
          R$
        </Text>
      </Prefix>

      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        value={isFilled}
      />

      <ClearButton handleClear={handleClear} />
    </InputContainer>
  )
}

export { MoneyInput }
export type { MoneyInputProps }
