import { useState } from 'react'

import { ClearButton } from './components/ClearButton'
import { InputContainer } from './styles'

type NumberInputProps = {
  placeholder?: string
  value: number | undefined
  onChange: (value: number | undefined) => void
  onBlur?: (event?: React.FocusEvent<HTMLInputElement, Element>) => void
  onFocus?: (event?: React.FocusEvent<HTMLInputElement, Element>) => void
}

function NumberInput({
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  ...props
}: NumberInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(String(value))

  function handleChange(
    event?: React.ChangeEvent<HTMLInputElement> | null,
  ): void {
    const targetValue = event?.target.value

    const valueWithoutDigit = targetValue?.replace(/\D/g, '') ?? ''

    setIsFilled(valueWithoutDigit)

    if (onChange && event) {
      onChange(Number(valueWithoutDigit))
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

export { NumberInput }
export type { NumberInputProps }
