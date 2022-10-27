import { styled } from '@siakit/core'

export const LinkButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',

  backgroundColor: 'transparent',

  border: 0,

  gap: 8,

  borderRadius: 8,

  fontWeight: 600,

  cursor: 'pointer',

  transition: 'all 0.150s',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:hover:not([disabled])': {
    textDecoration: 'underline',
  },

  variants: {
    size: {
      sm: {
        fontSize: 12,

        '& svg': {
          width: 12,
          height: 12,
        },
      },
      md: {
        fontSize: 14,

        '& svg': {
          width: 16,
          height: 16,
        },
      },
      lg: {
        fontSize: 16,

        '& svg': {
          width: 20,
          height: 20,
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
