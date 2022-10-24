import { ChangeEvent, useState } from 'react'

import { themeKeys } from '@siakit/core'
import { IconButton } from '@siakit/icon-button'
import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

import {
  Input,
  Suffix,
  PasswordInputContainer,
  StrengthContainer,
} from './styles'

type PasswordInputProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  disabled?: boolean
  strength?: number
}

type RestProps = {
  isErrored: boolean
}

export function PasswordInput({
  value,
  onChange,
  placeholder,
  disabled,
  strength,
  ...props
}: PasswordInputProps) {
  const { isErrored } = props as RestProps

  console.log('pass input', strength)

  const [hidden, setHidden] = useState(true)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const targetValue = event.target.value

    onChange(targetValue)
  }

  function handleClear() {
    onChange('')
  }

  return (
    <Flex direction="column">
      <PasswordInputContainer isErrored={isErrored} disabled={disabled}>
        <Input
          type={hidden ? 'password' : 'text'}
          value={value}
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

        <IconButton
          type="button"
          size="sm"
          variant="ghost"
          colorScheme="gray"
          tabIndex={-1}
          onClick={() => setHidden((prevState) => !prevState)}
          disabled={disabled}
        >
          {hidden ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="192"
              height="192"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path d="M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48S61.4,61.3,36.3,86.3C17.5,105.2,9,124,8.7,124.8a7.9,7.9,0,0,0,0,6.4c.3.8,8.8,19.6,27.6,38.5C61.4,194.7,93.1,208,128,208s66.6-13.3,91.7-38.3c18.8-18.9,27.3-37.7,27.6-38.5A7.9,7.9,0,0,0,247.3,124.8ZM128,92a36,36,0,1,1-36,36A36,36,0,0,1,128,92Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="192"
              height="192"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path d="M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48a132.4,132.4,0,0,0-22,1.8,8.1,8.1,0,0,0-4.6,13.3L202.7,174.5a8,8,0,0,0,5.9,2.6,8.6,8.6,0,0,0,5.4-2c22.8-20.5,32.9-42.9,33.3-43.8A8.2,8.2,0,0,0,247.3,124.8Z"></path>
              <path d="M53.9,34.6A8,8,0,0,0,42.1,45.4L61.3,66.5C25,88.8,9.4,123.2,8.7,124.8a8.2,8.2,0,0,0,0,6.5c.3.7,8.8,19.5,27.6,38.4C61.4,194.7,93.1,208,128,208a126.9,126.9,0,0,0,52.1-10.8l22,24.2A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1,7.9,7.9,0,0,0,.5-11.3ZM128,164a36,36,0,0,1-29.5-56.6l47.2,51.9A35.4,35.4,0,0,1,128,164Z"></path>
            </svg>
          )}
        </IconButton>
      </PasswordInputContainer>

      {typeof strength === 'number' && (
        <StrengthContainer>
          <div>
            <div
              style={{
                height: '100%',
                width: `${strength}%`,
                borderRadius: 2,
                backgroundColor:
                  strength > 0 && strength <= 30
                    ? themeKeys.colors.red9.value
                    : strength > 30 && strength < 70
                    ? themeKeys.colors.amber9.value
                    : themeKeys.colors.green9.value,
              }}
            />
          </div>

          {strength > 0 && (
            <Text size="xs" lowContrast>
              {strength > 0 && strength <= 30 && 'Senha fraca'}
              {strength > 30 && strength < 70 && 'Senha média'}
              {strength >= 70 && 'Senha forte'}
            </Text>
          )}
        </StrengthContainer>
      )}
    </Flex>
  )
}
