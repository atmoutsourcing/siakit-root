import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'
import {
  SliderContainer,
  SliderTrack,
  SliderRange,
  SliderThumb,
} from './styles'

type SliderProps = {
  value: number[]
  onChange: (value: number[]) => void
  min?: number
  max?: number
  disabled?: boolean
}

export function Slider({
  value,
  onChange,
  min = 0,
  max = 100,
  disabled,
}: SliderProps) {
  return (
    <Flex
      align="center"
      css={disabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
    >
      <SliderContainer
        value={value}
        onValueChange={onChange}
        min={min}
        max={max}
        disabled={disabled}
      >
        <SliderTrack>
          <SliderRange />
        </SliderTrack>

        <SliderThumb />
      </SliderContainer>

      <Flex width={32} justify="end">
        <Text>{value}</Text>
      </Flex>
    </Flex>
  )
}
