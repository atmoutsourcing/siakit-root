import { styled } from '@siakit/core'
import { PopoverContent } from '@siakit/popover'

export const DatePickerContainer = styled('div', {
  position: 'relative',

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

  width: '$full',
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

  '.rdp': {
    '--rdp-cell-size': '38px',
    fontSize: '$sm',
  },

  '.rdp-day': {
    width: '30px',
    height: '30px',
    maxWidth: '30px',
    margin: '0 auto',
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

  '.rdp-button.rdp-day_blocked, .rdp-button.rdp-day_blocked:hover:not([aria-disabled="true"])':
    {
      color: '$gray8',
      backgroundColor: 'color-mix(in srgb, $gray4 60%, transparent) !important',
      textDecoration: 'line-through',
      cursor: 'not-allowed',
    },
})

export const Footer = styled('div', {
  display: 'flex',
  justifyContent: 'end',
  gap: '$2',

  padding: '$2 $3 $3',
  borderTop: '1px solid $gray4',
})
