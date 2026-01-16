import { ChangeEvent } from 'react'

import type {} from '@siakit/core'
import { IconButton } from '@siakit/icon-button'
import { toMask, MaskType } from '@siakit/mask'

import { Input, Suffix, MaskInputContainer } from './styles'

type MaskInputProps = {
  value: string
  onChange: (value: string) => void
  mask: MaskType
  placeholder?: string
  disabled?: boolean
}

type RestProps = {
  isErrored: boolean
}

export function MaskInput({
  value,
  onChange,
  mask,
  placeholder,
  disabled,
  ...props
}: MaskInputProps) {
  const { isErrored } = props as RestProps

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const targetValue = event.target.value

    const valueWithoutDigit = toMask({ value: targetValue, mask })

    onChange(valueWithoutDigit)
  }

  function handleClear() {
    onChange('')
  }

  return (
    <MaskInputContainer isErrored={isErrored} disabled={disabled}>
      <Input
        type="text"
        value={toMask({ value, mask })}
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
    </MaskInputContainer>
  )
}
