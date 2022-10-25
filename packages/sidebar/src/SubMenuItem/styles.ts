import { styled } from '@siakit/core'

export const SubMenuItemContainer = styled('a', {
  position: 'relative',
  minHeight: 32,
  height: 32,
  paddingLeft: 12,

  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',

  fontSize: 14,

  color: '$gray9',

  '&:hover': {
    backgroundColor: '$gray4',
  },

  variants: {
    isSelected: {
      true: {
        backgroundColor: '$gray5',
        color: '$gray12',

        '&::before': {
          position: 'absolute',
          content: '',
          width: 2,
          borderRadius: '0 2px 2px 0',
          top: 0,
          bottom: 0,
          left: 0,
          backgroundColor: '$gray12',
        },
      },
    },
  },
})
