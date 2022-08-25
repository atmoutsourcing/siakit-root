import { styled } from '@siakit/core'

const FooterContainer = styled('div', {
  padding: 16,

  display: 'flex',
  justifyContent: 'flex-end',
  flexWrap: 'wrap',

  gap: 8,

  transition: 'background-color 0.150s',
})

const FooterLeftContainer = styled('div', {
  flex: 1,
  gap: 8,
})

export { FooterContainer, FooterLeftContainer }
