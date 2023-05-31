import * as RadixTabs from '@radix-ui/react-tabs'
import { styled } from '@siakit/core'

export const Container = styled(RadixTabs.List, {
  flexShrink: 0,

  position: 'relative',
  display: 'flex',

  overflowX: 'auto',

  borderBottom: '1px solid $gray4',

  padding: '0 8px',
  gap: 8,
})
