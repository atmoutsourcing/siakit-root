import * as RadixAccordion from '@radix-ui/react-accordion'
import { styled } from '@siakit/core'

export const AccordionItemContainer = styled(RadixAccordion.Item, {
  backgroundColor: '$gray4',

  display: 'flex',
  flexDirection: 'column',

  borderRadius: 8,

  transition: 'background-color 0.150s',
})

export const AccordionItemTrigger = styled(RadixAccordion.Trigger, {
  backgroundColor: '$gray4',
  border: 'none',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0 16px',
  borderRadius: 8,
  gap: 12,
  height: 48,

  color: '$gray11',

  transition: 'background-color 0.150s',

  '& strong': {
    transition: 'color 0.150s',
  },

  '& svg': {
    width: 16,
    height: 16,
    transition: 'transform 0.150s',

    '& polyline': {
      stroke: '$gray11',
      transition: 'stroke 0.150s',
    },
  },

  '&[data-state=open]': {
    '& svg': {
      transform: 'rotate(90deg)',

      '& polyline': {
        stroke: '$gray12',
      },
    },

    color: '$gray12',
  },
})

export const AccordionItemContent = styled(RadixAccordion.Content, {
  transition: 'all 0.150s',
})
