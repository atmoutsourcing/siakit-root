import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

import { CheckboxContainer, CheckboxIndicator } from './styles'

type CheckboxProps = {
  label: string
  value: boolean
  onChange: (value: boolean) => void
  disabled?: boolean
}

type RestProps = {
  isErrored: boolean
}

export function Checkbox({
  label,
  value,
  onChange,
  disabled,
  ...props
}: CheckboxProps) {
  const { isErrored } = props as RestProps

  return (
    <Flex gap={8} align="center">
      <CheckboxContainer
        id={label}
        checked={value}
        onCheckedChange={onChange}
        isErrored={isErrored}
        disabled={disabled}
        {...props}
      >
        <CheckboxIndicator>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-check"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </CheckboxIndicator>
      </CheckboxContainer>

      <Text
        as="label"
        size="sm"
        htmlFor={label}
        css={disabled ? { cursor: 'not-allowed', opacity: 0.5 } : {}}
      >
        {label}
      </Text>
    </Flex>
  )
}
