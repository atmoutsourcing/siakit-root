import { IconButton } from '@siakit/icon-button'
import { ChangeEvent } from 'react'

import { Textarea, Suffix, TextareaInputContainer } from './styles'

type TextareaInputProps = {
  value: string
  onChange: (value: string) => void
  rows?: number
  placeholder?: string
  disabled?: boolean
}

type RestProps = {
  isErrored: boolean
}

export function TextareaInput({
  value,
  onChange,
  rows = 5,
  placeholder,
  disabled,
  ...props
}: TextareaInputProps) {
  const { isErrored } = props as RestProps

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const targetValue = event.target.value

    onChange(targetValue)
  }

  function handleClear() {
    onChange('')
  }

  return (
    <TextareaInputContainer isErrored={isErrored} disabled={disabled}>
      <Textarea
        value={value}
        onChange={handleChange}
        rows={rows}
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
    </TextareaInputContainer>
  )
}
