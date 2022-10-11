import { styled } from '@siakit/core'

export const MenuHeaderContainer = styled('a', {
  height: 48,

  display: 'flex',
  alignItems: 'center',

  justifyContent: 'center',

  variants: {
    isExpanded: {
      true: {
        paddingLeft: 16,
      },
    },
    isClickable: {
      true: {
        cursor: 'pointer',
      },
    },
  },
})
