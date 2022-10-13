import { styled } from '@siakit/core'

export const IconButtonContainer = styled('button', {
  all: 'unset',

  cursor: 'pointer',
  fontSize: '$sm',
  fontWeight: '$medium',
  borderRadius: '$md',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  lineHeight: 0,

  transition: 'background-color 0.150s, color 0.150s',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  svg: {
    width: 16,
    height: 16,
  },

  variants: {
    size: {
      sm: {
        width: 24,
        height: 24,

        fontSize: '$xs',

        borderRadius: '$sm',

        svg: {
          width: 12,
          height: 12,
        },
      },
      md: {
        width: 32,
        height: 32,
      },
      lg: {
        width: 40,
        height: 40,
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
