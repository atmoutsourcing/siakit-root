import { styled } from '@siakit/core'

const Container = styled('div', {
  backgroundColor: '$gray6',
  transition: 'all 0.150s',

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
})

export { Container }
