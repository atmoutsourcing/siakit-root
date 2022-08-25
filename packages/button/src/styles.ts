import { styled } from '@siakit/core'

const Container = styled('button', {
  display: 'flex',
  alignItems: 'center',

  border: 0,

  gap: 8,

  borderRadius: 8,

  fontSize: 14,
  lineHeight: '14px',
  fontWeight: 600,

  cursor: 'pointer',

  transition: 'all 0.150s',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      sm: {
        borderRadius: 6,

        fontSize: 12,
        lineHeight: 12,

        height: 24,
        px: 12,

        '& svg': {
          width: 12,
          height: 12,
        },
      },
      md: {
        height: 32,
        px: 16,

        '& svg': {
          width: 16,
          height: 16,
        },
      },
      lg: {
        height: 40,
        px: 24,

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

export { Container }
