import * as RadixTabs from '@radix-ui/react-tabs'
import { styled } from '@siakit/core'

export const TabsItemContainer = styled(RadixTabs.Trigger, {
  all: 'unset',
  color: '$gray9',
  cursor: 'pointer',
  height: 40,
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  padding: '0 16px',
  fontSize: '$sm',
  whiteSpace: 'nowrap',

  transition: 'all 0.150s',

  '&:hover:not([disabled])': {
    color: '$gray12',
    backgroundColor: '$gray3',
  },

  '&[data-state="active"]': {
    $$currentColor: '$colors$primary9',

    color: '$gray12',
    boxShadow: 'inset 0 -1px 0 0 $$currentColor, 0 1px 0 0 $$currentColor',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})
