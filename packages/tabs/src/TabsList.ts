import * as RadixTabs from '@radix-ui/react-tabs'
import { styled } from '@siakit/core'

export const TabsList = styled(RadixTabs.List, {
  flexShrink: 0,

  position: 'relative',
  display: 'flex',
  borderBottom: '2px solid $gray6',

  overflowX: 'auto',
})
