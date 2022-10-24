import * as RadixTabs from '@radix-ui/react-tabs'
import { styled } from '@siakit/core'

export const Tabs = styled(RadixTabs.Root, {
  flex: 1,
})

export const TabsList = styled(RadixTabs.List, {})

export const TabsItem = styled(RadixTabs.Trigger, {
  '&[data-state="active"]': {
    backgroundColor: 'tomato',
  },
})

export const TabsContent = styled(RadixTabs.Content, {})
