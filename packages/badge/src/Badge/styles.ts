import { styled } from '@siakit/core'

export const BadgeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  borderRadius: 4,

  height: 20,

  px: 6,
  gap: 4,

  fontSize: 12,
  lineHeight: '14px',
  fontWeight: 600,

  transition: 'background-color 0.150s, color 0.150s',

  '& svg': {
    width: 12,
    height: 12,
  },
})
