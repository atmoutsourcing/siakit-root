import { styled } from '@siakit/core'

export const TableContainer = styled('div', {
  width: '$full',
  overflow: 'auto',

  borderRadius: '$2',
  backgroundColor: '$shape',
  boxShadow: '$sm',
  border: '1px solid $gray3',
})

export const Content = styled('div', {
  position: 'relative',
  width: '100%',
  display: 'grid',
})

export const BodyCell = styled('div', {
  whiteSpace: 'nowrap',
  padding: 12,
  borderTop: '1px solid $gray6',
  display: 'flex',
  fontSize: '0.875rem',
})

export const ActionCell = styled('div', {
  whiteSpace: 'nowrap',

  position: 'sticky',
  right: 0,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$shape',
  borderTop: '1px solid $gray6',
  boxShadow: '$sm',
})

export const FooterCell = styled('div', {
  display: 'flex',

  whiteSpace: 'nowrap',
  padding: 12,

  position: 'sticky',
  bottom: '0',

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
