import { styled } from '@siakit/core'

export const AvatarContainer = styled('div', {
  position: 'relative',

  borderRadius: '50%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: '$gray4',
  color: '$gray11',

  transition: 'all 0.150s',

  '&::after': {
    transition: 'all 0.150s',
  },

  variants: {
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
