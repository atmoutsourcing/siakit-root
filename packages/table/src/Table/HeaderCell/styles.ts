import { styled } from '@siakit/core'

const Container = styled('button', {
  border: 0,
  whiteSpace: 'nowrap',
  padding: 12,
  position: 'sticky',
  top: 0,
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  fontSize: '0.75rem',
  fontWeight: '600 !important',
  cursor: 'default',
  color: '$gray12',
  zIndex: 1,

  variants: {
    isActive: {
      true: {
        color: '$primary9',
      },
    },
    isAction: {
      true: {
        right: 0,
      },
    },
    isSort: {
      true: {
        cursor: 'pointer',
      },
    },
  },
})

export { Container }
