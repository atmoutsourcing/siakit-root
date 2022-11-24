import * as RadixTabs from '@radix-ui/react-tabs'
import { styled } from '@siakit/core'

export const TabsItemContainer = styled(RadixTabs.Trigger, {
  all: 'unset',
  height: 40,

  display: 'flex',

  '&:hover:not([disabled]) > div': {
    color: '$gray12',
    backgroundColor: '$gray3',
  },

  '&:disabled > div': {
    color: '$gray7',
    cursor: 'not-allowed',

    '> div': {
      opacity: 0.5,
    },
  },

  '&[data-state="active"] > div': {
    color: '$gray12',
    borderColor: '$primary9',
  },
})

export const Placeholder = styled('span', {
  flex: 1,
  borderBottom: '2px solid $gray6',

  width: 8,
})

export const Content = styled('div', {
  gap: 6,
  padding: '0 8px',

  color: '$gray9',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  fontSize: '$sm',
  whiteSpace: 'nowrap',

  borderBottom: '2px solid $gray6',
  transition: 'all 0.150s',
})
