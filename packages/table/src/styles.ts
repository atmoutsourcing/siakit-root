import { styled } from '@siakit/core'

const Container = styled('div', {
  width: '100%',
  overflow: 'auto',

  borderRadius: 8,
  backgroundColor: '$cardBackground',
  border: '1px solid $gray3',
})

const Content = styled('div', {
  position: 'relative',
  width: '100%',
  display: 'grid',
})

const BodyCell = styled('div', {
  whiteSpace: 'nowrap',
  padding: 12,
  borderTop: '1px solid $gray6',
  display: 'flex',
  fontSize: '0.875rem',
})

const ActionCell = styled('div', {
  whiteSpace: 'nowrap',

  position: 'sticky',
  right: 0,
  zIndex: 2,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$cardBackground',
  borderTop: '1px solid $gray6',
})

const FooterCell = styled('div', {
  display: 'flex',

  whiteSpace: 'nowrap',
  padding: 12,

  position: 'sticky',
  bottom: '0',
  zIndex: 3,

  backgroundColor: '$gray3',
  borderTop: '1px solid $gray6',

  fontSize: '0.875rem',
  fontWeight: '600 !important',

  variants: {
    isAction: {
      true: {
        position: 'sticky',
        right: 0,
      },
    },
  },
})

export { Container, Content, BodyCell, ActionCell, FooterCell }
