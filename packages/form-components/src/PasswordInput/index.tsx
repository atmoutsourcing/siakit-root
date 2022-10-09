import { useState } from 'react'

import { IconButton } from '@siakit/icon-button'

import { ClearButton } from '../components/ClearButton'
import { InputContainer } from '../styles'
import { EyeIcon } from './EyeIcon'
import { EyeSlashIcon } from './EyeSlashIcon'

type PasswordInputProps = {
  placeholder?: string
  value: string
  onChange?: (value: string) => void
  onBlur?: (event?: React.FocusEvent<HTMLInputElement, Element>) => void
  onFocus?: (event?: React.FocusEvent<HTMLInputElement, Element>) => void
}

function PasswordInput({
  placeholder,
  value = '',
  onChange,
  onBlur,
  onFocus,
  ...props
}: PasswordInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(value)
  const [isBlurred, setIsBlurred] = useState(true)

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
        type={isBlurred ? 'password' : 'text'}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        value={isFilled}
      />

      <ClearButton handleClear={handleClear} />

      <IconButton
        type="button"
        size="sm"
        variant="ghost"
        colorScheme="gray"
        icon={isBlurred ? <EyeIcon /> : <EyeSlashIcon />}
        onClick={() => setIsBlurred((prevState) => !prevState)}
        tabIndex={-1}
      />
    </InputContainer>
  )
}

export { PasswordInput }
export type { PasswordInputProps }
