import { styled } from '@siakit/core'

export const ProgressBarContainer = styled('div', {
  width: '100%',

  display: 'flex',

  alignItems: 'center',
  gap: 8,
})

export const Content = styled('div', {
  position: 'relative',
  width: '100%',
  height: 8,
  backgroundColor: '$gray4',
  borderRadius: 4,
})

export const Bar = styled('div', {
  position: 'relative',
  height: 8,
  borderRadius: 4,

  transition: 'all 0.150s',

  '&::after': {
    content: '',
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(
        -45deg,
        rgba(255, 255, 255, 0.08) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.08) 50%,
        rgba(255, 255, 255, 0.08) 75%,
        transparent 75%,
        transparent
      )`,
    zIndex: 1,
    backgroundSize: '8px 8px',
    animation: 'move 2s linear infinite',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    overflow: 'hidden',
  },
})
