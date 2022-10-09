import { useState } from 'react'

import { ClearButton } from './components/ClearButton'
import { InputContainer } from './styles'

type InputProps = {
  placeholder?: string
  value: string
  onChange?: (value: string) => void
  onBlur?: (event?: React.FocusEvent<HTMLInputElement, Element>) => void
  onFocus?: (event?: React.FocusEvent<HTMLInputElement, Element>) => void
}

function Input({
  placeholder,
  value = '',
  onChange,
  onBlur,
  onFocus,
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(value)

  function handleChange(
    event?: React.ChangeEvent<HTMLInputElement> | null,
  ): void {
    const targetValue = event?.target.value ?? ''

    setIsFilled(targetValue)

    if (onChange && event) {
      onChange(targetValue)
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

export { Input }
export type { InputProps }
