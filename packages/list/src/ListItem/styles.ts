import { styled } from '@siakit/core'

export const ListItemContainer = styled('li', {
  fontWeight: 400,
  lineHeight: 1.5,
  color: '$gray12',
  transition: 'color 0.150s',

  '& strong': {
    fontWeight: 600,
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
        fontSize: '1.125rem',
      },
      xl: {
        fontSize: '1.25rem',
      },
      '2xl': {
        fontSize: '1.5rem',
      },
      '3xl': {
        fontSize: '1.875rem',
      },
      '4xl': {
        fontSize: '2.25rem',
      },
      '5xl': {
        fontSize: '3rem',
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
})
