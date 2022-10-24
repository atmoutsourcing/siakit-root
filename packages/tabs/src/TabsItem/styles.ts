import * as RadixTabs from '@radix-ui/react-tabs'
import { styled } from '@siakit/core'

export const TabsItemContainer = styled(RadixTabs.Trigger, {
  all: 'unset',
  color: '$gray9',
  cursor: 'pointer',
  height: 32,
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  padding: '0 16px',
  fontSize: '$sm',
  borderBottom: '2px solid $gray6',
  transition: 'all 0.150s',
  zIndex: 10,

  '&:not(:disabled):hover': {
    color: '$gray10',
    backgroundColor: '$gray3',
  },

  '&[data-state="active"]': {
    color: '$gray12',
    borderColor: '$primary9',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})
