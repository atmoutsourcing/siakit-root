import { styled } from '@siakit/core'

export const Container = styled('div', {
  display: 'flex',

  gap: 4,

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
      },
      column: {
        flexDirection: 'column',
      },
    },
  },

  defaultVariants: {
    direction: 'column',
  },
})
