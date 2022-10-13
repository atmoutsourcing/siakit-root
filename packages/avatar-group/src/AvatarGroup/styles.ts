import { styled } from '@siakit/core'

export const AvatarGroupContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'row-reverse',

  'div + div': {
    marginLeft: -8,
  },

  '& a:hover': {
    zIndex: 5,
  },

  '& div': {
    border: '3px solid $gray1',

    '&:hover': {
      zIndex: 5,
    },

    '&:nth-of-type(1)': {
      marginInlineStart: -8,
    },
  },
})

export const MoreContainer = styled('div', {
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$gray5',
  color: '$gray11',
  marginLeft: -8,

  transition: 'all 0.150s',

  variants: {
    size: {
      xs: {
        width: 24,
        height: 24,

        '& strong': {
          fontSize: '0.75rem',
        },
      },
      sm: {
        width: 32,
        height: 32,

        '& strong': {
          fontSize: '0.875rem',
        },
      },
      md: {
        width: 48,
        height: 48,

        '& strong': {
          fontSize: '1rem',
        },
      },
      lg: {
        width: 64,
        height: 64,

        '& strong': {
          fontSize: '1.25rem',
        },
      },
      xl: {
        width: 96,
        height: 96,

        '& strong': {
          fontSize: '1.875rem',
        },
      },
      '2xl': {
        width: 128,
        height: 128,

        '& strong': {
          fontSize: '2.25rem',
        },
      },
    },
  },
})
