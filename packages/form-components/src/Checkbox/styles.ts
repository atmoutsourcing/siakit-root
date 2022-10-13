import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { styled } from '@siakit/core'

export const CheckboxContainer = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  width: '$5',
  height: '$5',
  backgroundColor: '$gray4',
  borderRadius: '$sm',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

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

export const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
  color: '$white',

  height: '$4',

  lineHeight: 0,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
