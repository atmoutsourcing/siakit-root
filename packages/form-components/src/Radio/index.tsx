import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

import { RadioItem, RadioIndicator, RadioContainer } from './styles'

type OptionType = {
  value: string | number
  label: string
  subtitle?: string
}

type RadioProps = {
  value: string
  onChange: (value: string) => void
  options: OptionType[]
  disabled?: boolean
}

type RestProps = {
  isErrored: boolean
}

export function Radio({
  value,
  onChange,
  options,
  disabled,
  ...props
}: RadioProps) {
  const { isErrored } = props as RestProps

  return (
    <RadioContainer value={value} onValueChange={onChange}>
      {options.map((option) => (
        <Flex key={option.value} gap={8}>
          <RadioItem
            id={String(option.value)}
            value={String(option.value)}
            isErrored={isErrored}
            disabled={disabled}
            {...props}
          >
            <RadioIndicator />
          </RadioItem>

          <Flex flex direction="column">
            <Text
              as="label"
              size="sm"
              htmlFor={String(option.value)}
              css={disabled ? { cursor: 'not-allowed', opacity: 0.5 } : {}}
            >
              {option.label}
            </Text>
            {option.subtitle && (
              <Text size="sm" lowContrast>
                {option.subtitle}
              </Text>
            )}
          </Flex>
        </Flex>
      ))}
    </RadioContainer>
  )
}
