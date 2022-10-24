import * as RadixTabs from '@radix-ui/react-tabs'
import { styled } from '@siakit/core'

export const Tabs = styled(RadixTabs.Root, {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
})

export const TabsList = styled(RadixTabs.List, {
  position: 'relative',
  display: 'flex',

  '&:after': {
    content: '',
    position: 'absolute',
    height: 2,
    width: '100%',
    backgroundColor: '$gray6',
    bottom: 0,
    zIndex: 5,
  },
})
