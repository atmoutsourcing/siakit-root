import { styled } from '@siakit/core'

export const FormControlContainer = styled('div', {
  width: '$full',

  display: 'flex',

  gap: '$1',

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
