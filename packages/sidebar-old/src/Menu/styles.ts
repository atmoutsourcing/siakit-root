import { styled } from '@siakit/core'

export const MenuContainer = styled('div', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',

  overflowY: 'auto',

  width: 48,

  variants: {
    isExpanded: {
      true: {
        width: 240,
      },
    },
    isDarkTheme: {
      true: {
        backgroundColor: '$gray2',
      },
      false: {
        backgroundColor: '$indigo11',
      },
    },
  },
})
