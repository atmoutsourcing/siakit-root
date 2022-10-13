import { IconButton } from '@siakit/icon-button'
import { ChangeEvent } from 'react'

import { Input, Suffix, PercentageInputContainer, Prefix } from './styles'

type PercentageInputProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  disabled?: boolean
}

type RestProps = {
  isErrored: boolean
}

function stringToNumber(value: string) {
  const newValue = value.replace(/\D/g, '')

  if (Number(newValue) > 100) {
    return '100'
  }

  if (Number(newValue) < 0) {
    return '0'
  }

  return newValue
}

export function PercentageInput({
  value,
  onChange,
  placeholder,
  disabled,
  ...props
}: PercentageInputProps) {
  const { isErrored } = props as RestProps

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const targetValue = event.target.value

    const valueWithoutDigit = stringToNumber(targetValue)

    onChange(valueWithoutDigit)
  }

  function handleClear() {
    onChange('')
  }

  return (
    <PercentageInputContainer isErrored={isErrored} disabled={disabled}>
      <Prefix>
        <span>%</span>
      </Prefix>

      <Input
        type="text"
        value={stringToNumber(value)}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      />

      <Suffix css={{ visibility: value ? 'visible' : 'hidden' }}>
        <IconButton
          type="button"
          size="sm"
          variant="ghost"
          colorScheme="gray"
          tabIndex={-1}
          onClick={handleClear}
          disabled={disabled}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </Suffix>
    </PercentageInputContainer>
  )
}
