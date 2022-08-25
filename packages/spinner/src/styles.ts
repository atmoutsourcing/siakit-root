import { styled, keyframes } from '@siakit/core'

const animation = keyframes({
  to: {
    transform: 'rotate(360deg)',
  },
})

const Container = styled('div', {
  width: 22,
  height: 22,
  borderRadius: '50%',
  border: '2px solid',
  animation: `${animation} 0.9s linear infinite`,
  transition: 'border-color 0.150s',
})

export { Container }
