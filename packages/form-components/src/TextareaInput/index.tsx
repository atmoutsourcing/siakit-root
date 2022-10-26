import { ChangeEvent } from 'react'

import { IconButton } from '@siakit/icon-button'

import { TextAreaInputContainer, TextArea, Suffix } from './styles'

type TextAreaInputProps = {
  value: string
  onChange: (value: string) => void
  rows?: number
  placeholder?: string
  disabled?: boolean
}

type RestProps = {
  isErrored: boolean
}

export function TextAreaInput({
  value,
  onChange,
  rows = 5,
  placeholder,
  disabled,
  ...props
}: TextAreaInputProps) {
  const { isErrored } = props as RestProps

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const targetValue = event.target.value

    onChange(targetValue)
  }

  function handleClear() {
    onChange('')
  }

  return (
    <TextAreaInputContainer isErrored={isErrored} disabled={disabled}>
      <TextArea
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
    </TextAreaInputContainer>
  )
}
