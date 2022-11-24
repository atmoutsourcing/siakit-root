import * as RadixTabs from '@radix-ui/react-tabs'
import { styled } from '@siakit/core'

export const Container = styled(RadixTabs.List, {
  flexShrink: 0,

  position: 'relative',
  display: 'flex',

  overflowX: 'auto',
})

export const Placeholder = styled('div', {
  flex: 1,
  borderBottom: '2px solid $gray6',
})
