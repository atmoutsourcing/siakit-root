import * as SwitchPrimitive from '@radix-ui/react-switch'
import { styled } from '@siakit/core'

export const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 44,
  height: 24,
  backgroundColor: '$gray4',
  borderRadius: 9999,
  position: 'relative',
  transition: 'background-color 0.150s',

  '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',

  '&:focus': {
    boxShadow: '0 0 0 2px black',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$primary9',
  },

  variants: {
    isErrored: {
      true: {
        backgroundColor: '$red5',
      },
    },
  },
})

export const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 16,
  height: 16,
  backgroundColor: '$white',
  borderRadius: 9999,
  transition: 'transform 100ms',
  transform: 'translateX(4px)',
  willChange: 'transform',
  boxShadow: '$sm',

  '&[data-state="checked"]': {
    transform: 'translateX(24px)',
  },
})
