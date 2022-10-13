import * as RadixSlider from '@radix-ui/react-slider'
import { styled } from '@siakit/core'

export const SliderContainer = styled(RadixSlider.Root, {
  flex: 1,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',

  '&[data-orientation="horizontal"]': {
    height: '$4',
  },
})

export const SliderTrack = styled(RadixSlider.Track, {
  backgroundColor: '$gray4',
  position: 'relative',
  flexGrow: 1,
  borderRadius: '$full',

  '&[data-orientation="horizontal"]': {
    height: '$2',
  },
})

export const SliderRange = styled(RadixSlider.Range, {
  position: 'absolute',
  backgroundColor: '$primary9',
  borderRadius: '$full',
  height: '$full',
})

export const SliderThumb = styled(RadixSlider.Thumb, {
  all: 'unset',
  display: 'block',
  width: '$4',
  height: '$4',
  backgroundColor: '$white',
  boxShadow: '$sm',
  borderRadius: '$full',
  border: '1px solid $gray3',

  '&:focus': {
    boxShadow: '0 0 0 2px black',
  },
})
