import { styled } from '@siakit/core'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',

  '& strong': {
    fontWeight: '$medium',
  },

  '& code': {
    fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
    padding: '3px 6px',
    borderRadius: 4,
    fontSize: '.9em',
    transition: 'color 0.150s, background-color 0.150s',
  },

  '& a': {
    color: '$primary10',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.150s',

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
    },
    lowContrast: {
      true: {
        color: '$gray11',
      },
    },
    align: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
})
