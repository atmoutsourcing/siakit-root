import * as RadixTabs from '@radix-ui/react-tabs'
import { styled } from '@siakit/core'

export const TabsContent = styled(RadixTabs.Content, {
  display: 'flex',
  flex: 1,
  overflow: 'auto',

  '&[data-state="inactive"]': {
    display: 'none',
  },
})
