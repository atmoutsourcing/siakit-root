import * as RadixPopover from '@radix-ui/react-popover'
import { styled } from '@siakit/core'

export const Content = styled(RadixPopover.Content, {
  backgroundColor: '$shape',

  borderRadius: '$md',
  border: '1px solid $gray4',

  maxWidth: 320,

  zIndex: 10000,
})
