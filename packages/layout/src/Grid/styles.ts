import { styled } from '@siakit/core'

export const GridContainer = styled('div', {
  display: 'grid',

  variants: {
    overflow: {
      true: {
        overflow: 'auto',
      },
    },
  },
})
