import { useState } from 'react'

import { ClearButton } from './components/ClearButton'
import { InputContainer, TextAreaContainer } from './styles'

type TextAreaProps = {
  value: string
  onChange: (value: string) => void
  rows?: number
  placeholder?: string
  onBlur?: (event?: React.FocusEvent<HTMLTextAreaElement, Element>) => void
  onFocus?: (event?: React.FocusEvent<HTMLTextAreaElement, Element>) => void
}

function TextArea({
  value = '',
  onChange,
  rows = 5,
  placeholder,
  onBlur,
  onFocus,
  ...props
}: TextAreaProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(value)

  function handleChange(
    event?: React.ChangeEvent<HTMLTextAreaElement> | null,
  ): void {
    const targetValue = event?.target.value ?? ''

    setIsFilled(targetValue)

    if (onChange && event) {
      onChange(targetValue)
    }
  }

  function handleBlur(
    event?: React.FocusEvent<HTMLTextAreaElement, Element>,
  ): void {
    setIsFocused(false)

    if (onBlur && event) {
      onBlur(event)
    }
  }

  function handleFocus(
    event?: React.FocusEvent<HTMLTextAreaElement, Element>,
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
    <TextAreaContainer isFocused={isFocused} isFilled={!!isFilled} {...props}>
      <textarea
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        value={isFilled}
        rows={rows}
      />

      <ClearButton handleClear={handleClear} />
    </TextAreaContainer>
  )
}

export { TextArea }
export type { TextAreaProps }
