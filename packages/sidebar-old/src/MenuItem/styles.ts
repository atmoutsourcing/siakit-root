import { styled } from '@siakit/core'

export const MenuItemContainer = styled('a', {
  position: 'relative',

  minHeight: 32,
  height: 32,
  paddingLeft: 16,

  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',

  gap: 12,

  fontSize: '$sm',
  fontWeight: '$regular',

  color: '$gray6',

  '&:hover': {
    background: `linear-gradient(
      to right,
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.04)
    )`,
  },

  variants: {
    isSelected: {
      true: {
        color: '$white',
        background: `linear-gradient(
          to right,
          rgba(255, 255, 255, 0.2),
          rgba(255, 255, 255, 0.04)
        )`,

        svg: {
          color: '$white',
        },

        '&:before': {
          position: 'absolute',
          content: '',
          top: 0,
          bottom: 0,
          left: 0,
          width: 2,
          borderRadius: '0 2px 2px 0',
          backgroundColor: '$white',
        },
      },
    },
    isExpanded: {
      false: {
        padding: 0,
        justifyContent: 'center',
      },
    },
    isDarkTheme: {
      true: {
        color: '$gray11',
      },
    },
  },
})
