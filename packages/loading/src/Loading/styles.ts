import { styled } from '@siakit/core'

export const Overlay = styled('div', {
  background: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  display: 'flex',
  placeItems: 'center',

  zIndex: 10000,
})
