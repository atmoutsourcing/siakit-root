import { styled } from '@siakit/core'

const Container = styled('strong', {
  fontWeight: 600,
  lineHeight: 1.2,
  color: '$gray12',
  transition: 'color 0.150s',

  variants: {
    size: {
      xs: {
        fontSize: '0.75rem',
      },
      sm: {
        fontSize: '0.875rem',
      },
      md: {
        fontSize: '1rem',
      },
      lg: {
        fontSize: '1.25rem',
      },
      xl: {
        fontSize: '1.875rem',
      },
      '2xl': {
        fontSize: '2.25rem',
      },
      '3xl': {
        fontSize: '3rem',
        lineHeight: 1,
      },
      '4xl': {
        fontSize: '3.75rem',
        lineHeight: 1,
      },
      '5xl': {
        fontSize: '4.5rem',
        lineHeight: 1,
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})

export { Container }
