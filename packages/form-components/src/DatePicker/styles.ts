import { styled } from '@siakit/core'
import { PopoverContent } from '@siakit/popover'

export const DatePickerContainer = styled('div', {
  width: '100%',

  background: '$gray1',
  border: '2px solid $gray4',

  height: '$8',
  borderRadius: '$md',

  padding: '0 2px 0 12px',

  display: 'flex',
  alignItems: 'center',

  '&:has(input:focus)': {
    borderColor: '$primary9',
  },

  variants: {
    isErrored: {
      true: {
        backgroundColor: '$red3',
        borderColor: '$red9',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
        backgroundColor: '$gray4',
      },
    },
  },
})

export const Input = styled('input', {
  all: 'unset',

  flex: 1,

  height: '$full',
  marginRight: '$2.5',

  fontSize: '$sm',
  color: '$gray12',

  '&::placeholder': {
    color: '$gray8',
  },
})

export const Suffix = styled('div')

export const CustomPopoverContent = styled(PopoverContent, {
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
})
