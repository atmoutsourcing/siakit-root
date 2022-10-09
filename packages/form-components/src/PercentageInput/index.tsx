import { useEffect, useState } from 'react'

import { Text } from '@siakit/text'

import { ClearButton } from '../components/ClearButton'
import { Prefix } from '../components/Prefix'
import { InputContainer } from '../styles'

type PercentageInputProps = {
  placeholder?: string
  value: number
  onChange: (value: number) => void
  onBlur?: (event?: React.FocusEvent<HTMLInputElement, Element>) => void
  onFocus?: (event?: React.FocusEvent<HTMLInputElement, Element>) => void
}

function PercentageInput({
  placeholder,
  value = 0,
  onChange,
  onBlur,
  onFocus,
  ...props
}: PercentageInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(value)

  useEffect(() => {
    setIsFilled(value)
  }, [value])

  function handleChange(
    event?: React.ChangeEvent<HTMLInputElement> | null,
  ): void {
    const targetValue = event?.target.value

    let newValue = 0

    if (Number(targetValue) < 0) {
      newValue = 0
    } else if (Number(targetValue) > 100) {
      newValue = 100
    } else {
      newValue = Number(targetValue)
    }

    setIsFilled(newValue)

    if (onChange && event) {
      onChange(newValue)
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
    setIsFilled(0)

    if (onChange) {
      onChange(0)
    }
  }

  return (
    <InputContainer isFocused={isFocused} isFilled={!!isFilled} {...props}>
      <Prefix>
        <Text size="sm" lowContrast>
          %
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

export { PercentageInput }
export type { PercentageInputProps }
