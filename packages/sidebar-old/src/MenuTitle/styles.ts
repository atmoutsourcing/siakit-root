import { styled } from '@siakit/core'

export const MenuTitleContainer = styled('div', {
  height: 32,

  display: 'flex',
  alignItems: 'flex-end',

  paddingBottom: 6,

  fontSize: 10,
  fontWeight: '$bold',
  textTransform: 'uppercase',

  color: '$primary6',

  variants: {
    isExpanded: {
      true: { paddingLeft: 16 },
      false: {
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
