import { styled } from '@siakit/core'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,
  color: '$gray12',

  variants: {
    size: {
      xxs: { fontSize: '$sm' },
      xs: { fontSize: '$md' },
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      '2xl': { fontSize: '$5xl' },
      '3xl': { fontSize: '$6xl' },
      '4xl': { fontSize: '$7xl' },
      '5xl': { fontSize: '$8xl' },
      '6xl': { fontSize: '$9xl' },
    },
    weight: {
      regular: {
        fontWeight: '$regular',
      },
      medium: {
        fontWeight: '$medium',
      },
      bold: {
        fontWeight: '$bold',
      },
    },
    lowContrast: {
      true: {
        color: '$gray11',
      },
    },
    inverted: {
      true: {
        color: '$gray1',
      },
    },
  },

  compoundVariants: [
    {
      lowContrast: true,
      inverted: true,
      css: {
        color: '$gray3',
      },
    },
  ],

  defaultVariants: {
    size: 'md',
    weight: 'bold',
  },
})
