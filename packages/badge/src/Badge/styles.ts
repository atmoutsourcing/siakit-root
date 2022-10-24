import { styled } from '@siakit/core'

export const BadgeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  borderRadius: 4,

  height: 20,

  padding: '0 6px',
  gap: 4,

  fontSize: 12,
  lineHeight: '14px',
  fontWeight: 500,

  transition: 'background-color 0.150s, color 0.150s',

  '& svg': {
    width: 12,
    height: 12,
  },
})
