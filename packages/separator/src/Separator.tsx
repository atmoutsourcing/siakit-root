import { styled } from '@siakit/core'

export const Separator = styled('div', {
  backgroundColor: '$gray6',

  variants: {
    direction: {
      horizontal: {
        height: 1,
        width: '100%',
        margin: '4px 0',
      },
      vertical: {
        width: 1,
        height: '100%',
        margin: '0 4px',
      },
    },
  },

  defaultVariants: {
    direction: 'horizontal',
  },
})
