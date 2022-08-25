import { styled } from '@siakit/core'

const Container = styled('div', {
  position: 'relative',

  borderRadius: '50%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  transition: 'all 0.150s',

  '&::after': {
    transition: 'all 0.150s',
  },

  variants: {
    colorScheme: {
      gray: {
        backgroundColor: '$gray4',
        color: '$gray11',
      },
      red: {
        backgroundColor: '$red4',
        color: '$red11',
      },
      pink: {
        backgroundColor: '$pink4',
        color: '$pink11',
      },
      violet: {
        backgroundColor: '$violet4',
        color: '$violet11',
      },
      indigo: {
        backgroundColor: '$indigo4',
        color: '$indigo11',
      },
      green: {
        backgroundColor: '$green4',
        color: '$green11',
      },
      orange: {
        backgroundColor: '$orange4',
        color: '$orange11',
      },
      brown: {
        backgroundColor: '$brown4',
        color: '$brown11',
      },
    },
    size: {
      xs: {
        width: 24,
        height: 24,

        '&::after': {
          height: 8,
          width: 8,
          borderWidth: 1,
        },

        '& strong': {
          fontSize: '0.75rem',
        },
      },
      sm: {
        width: 32,
        height: 32,

        '&::after': {
          height: 12,
          width: 12,
          borderWidth: 1.5,
        },

        '& strong': {
          fontSize: '0.875rem',
        },
      },
      md: {
        width: 48,
        height: 48,

        '&::after': {
          height: 16,
          width: 16,
          borderWidth: 2,
        },

        '& strong': {
          fontSize: '1rem',
        },
      },
      lg: {
        width: 64,
        height: 64,

        '&::after': {
          height: 22,
          width: 22,
          borderWidth: 2.5,
        },

        '& strong': {
          fontSize: '1.25rem',
        },
      },
      xl: {
        width: 96,
        height: 96,

        '&::after': {
          height: 32,
          width: 32,
          borderWidth: 3,
        },

        '& strong': {
          fontSize: '1.875rem',
        },
      },
      '2xl': {
        width: 128,
        height: 128,

        '&::after': {
          height: 42,
          width: 42,
          borderWidth: 3.5,
        },

        '& strong': {
          fontSize: '2.25rem',
        },
      },
    },
    badge: {
      true: {
        '&::after': {
          position: 'absolute',
          content: '',
          width: 16,
          height: 16,
          backgroundColor: '$orange9',
          borderRadius: '50%',
          bottom: 0,
          right: 0,
          borderStyle: 'solid',
          borderColor: '$gray1',
        },
      },
    },
  },
})

export { Container }
