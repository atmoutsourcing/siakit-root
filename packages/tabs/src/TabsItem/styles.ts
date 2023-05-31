import * as RadixTabs from '@radix-ui/react-tabs'
import { styled } from '@siakit/core'

export const TabsItemContainer = styled(RadixTabs.Trigger, {
  all: 'unset',
  position: 'relative',
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

  '&[data-state="active"]': {
    '> div': {
      color: '$gray12',
    },

    '> span': {
      display: 'flex',
    },
  },
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

  transition: 'all 0.150s',
})

export const SelectedElement = styled('span', {
  display: 'none',
  position: 'absolute',
  height: 2,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: '$primary9',
})
