import { styled } from '@siakit/core'
import { PopoverContent } from '@siakit/popover'

export const PopoverContentCustom = styled(PopoverContent, {
  '.rdp-day_selected:not([aria-disabled="true"])': {
    backgroundColor: '$primary9',
  },

  '.rdp-button:focus, .rdp-button:active': {
    borderColor: '$primary9',
    backgroundColor: '$primary3',
  },

  '.rdp-button:hover:not([aria-disabled="true"])': {
    backgroundColor: '$primary3 !important',
    color: '$primary11',
  },

  '.rdp-day_selected:active:not([aria-disabled="true"])': {
    color: '$primary11',
  },

  '.rdp-day_selected:focus:not([aria-disabled="true"])': {
    color: '$primary11',
  },

  '.rdp-day_today': {
    backgroundColor: '$orange4',
  },

  // border-radius: 8px,
  // background-color: ${({ theme }) => theme.colors.cardBackground},
  // box-shadow: ${({ theme }) => theme.shadows.sm},
  // border: 1px solid ${({ theme }) => theme.colors.gray[3]},

  // display: flex,
  // flex-wrap: wrap,
  // gap: 8px,
})
