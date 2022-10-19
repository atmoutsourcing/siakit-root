import { keyframes, styled } from '@siakit/core'

const animation = keyframes({
  to: {
    transform: 'rotate(360deg)',
  },
})

export const Spinner = styled('div', {
  width: 22,
  height: 22,
  borderRadius: '50%',
  border: '2px solid',
  animation: `${animation} 0.9s linear infinite`,
  transition: 'border-color 0.150s',

  borderColor: '$gray4',
  borderLeftColor: '$gray11',

  variants: {
    inverted: {
      true: {
        borderColor: '$gray11',
        borderLeftColor: '$gray4',
      },
    },
  },
})
