import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

import { OptionType } from '../Select'
import { RadioItem, RadioIndicator, RadioContainer } from './styles'

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
        <Flex key={option.value} gap={8} align="center">
          <RadioItem
            id={String(option.value)}
            value={String(option.value)}
            isErrored={isErrored}
            disabled={disabled}
            {...props}
          >
            <RadioIndicator />
          </RadioItem>

          <Text
            as="label"
            size="sm"
            htmlFor={String(option.value)}
            css={disabled ? { cursor: 'not-allowed', opacity: 0.5 } : {}}
          >
            {option.label}
          </Text>
        </Flex>
      ))}
    </RadioContainer>
  )
}
