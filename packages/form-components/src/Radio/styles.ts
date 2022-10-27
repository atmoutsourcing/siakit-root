import * as RadioPrimitive from '@radix-ui/react-radio-group'
import { styled } from '@siakit/core'

export const RadioContainer = styled(RadioPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

export const RadioItem = styled(RadioPrimitive.Item, {
  all: 'unset',
  backgroundColor: '$gray4',
  width: '$5',
  height: '$5',
  borderRadius: '$full',

  cursor: 'pointer',

  '&:focus': {
    boxShadow: '0 0 0 2px black',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$primary9',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },

  variants: {
    isErrored: {
      true: {
        backgroundColor: '$red5',
      },
    },
  },
})

export const RadioIndicator = styled(RadioPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '$full',
  height: '$full',
  position: 'relative',

  '&::after': {
    content: '',
    display: 'block',
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: '$white',
  },
})
