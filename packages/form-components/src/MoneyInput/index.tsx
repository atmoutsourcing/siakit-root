import { IconButton } from '@siakit/icon-button'
import { ChangeEvent } from 'react'
import { toMask } from '@siakit/mask'

import { Input, Suffix, MoneyInputContainer, Prefix } from './styles'

type MoneyInputProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  disabled?: boolean
}

type RestProps = {
  isErrored: boolean
}

export function MoneyInput({
  value,
  onChange,
  placeholder,
  disabled,
  ...props
}: MoneyInputProps) {
  const { isErrored } = props as RestProps

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const targetValue = event.target.value

    const valueWithoutDigit = toMask({ value: targetValue, mask: 'money' })

    onChange(valueWithoutDigit)
  }

  function handleClear() {
    onChange(toMask({ value: '', mask: 'money' }))
  }

  return (
    <MoneyInputContainer isErrored={isErrored} disabled={disabled}>
      <Prefix>
        <span>R$</span>
      </Prefix>

      <Input
        type="text"
        value={toMask({ value, mask: 'money' })}
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
    </MoneyInputContainer>
  )
}
