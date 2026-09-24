import { styled } from '@siakit/core'
import { PopoverContent } from '@siakit/popover'

const SMALL_SCREEN = '@media (max-width: 740px)'

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
  // O fallback cobre versões do Radix Popover anteriores à 1.0.3, que não
  // expõem essas variáveis (o monorepo usa a 1.0.2).
  maxWidth:
    'var(--radix-popover-content-available-width, calc(100vw - 16px)) !important',
  maxHeight: 'var(--radix-popover-content-available-height, 80vh)',
  overflowY: 'auto',

  '.rdp-months': {
    [SMALL_SCREEN]: {
      flexDirection: 'column',
    },
    gap: '$4',
  },

  '.rdp': {
    '--rdp-cell-size': '38px',
    fontSize: '$sm',
  },

  '.rdp-day_range_middle': {
    backgroundColor: 'transparent',
    color: '$primary11',
  },

  '.rdp-cell:has(.rdp-day_range_middle)': {
    background:
      'linear-gradient($primary3, $primary3) center / 100% 30px no-repeat',
  },

  '.rdp-cell:has(.rdp-day_range_start):not(:has(.rdp-day_range_end))': {
    background:
      'linear-gradient($primary3, $primary3) right center / 50% 30px no-repeat',
  },

  '.rdp-cell:has(.rdp-day_range_end):not(:has(.rdp-day_range_start))': {
    background:
      'linear-gradient($primary3, $primary3) left center / 50% 30px no-repeat',
  },

  '.rdp-day': {
    width: '30px',
    height: '30px',
    maxWidth: '30px',
    margin: '0 auto',
  },

  '.rdp-month': {
    margin: 0,
  },

  '.rdp-day_selected:not([aria-disabled="true"])': {
    backgroundColor: '$primary9',
  },

  '.rdp-button:hover:not([aria-disabled="true"]):not(.rdp-day_selected)': {
    backgroundColor: '$primary3 !important',
    color: '$primary11',
  },

  '.rdp-day_today': {
    backgroundColor: '$orange4',
  },

  '.rdp-day_range_middle': {
    backgroundColor: '$primary3',
    color: '$primary11',
  },

  '.rdp-button.rdp-day_blocked, .rdp-button.rdp-day_blocked:hover:not([aria-disabled="true"])':
    {
      color: '$gray8',
      backgroundColor: '$gray3 !important',
      textDecoration: 'line-through',
      cursor: 'not-allowed',
    },
})

export const PopoverBody = styled('div', {
  display: 'flex',

  [SMALL_SCREEN]: {
    flexDirection: 'column',
  },
})

export const PresetList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  padding: '$3 $2',
  borderRight: '1px solid $gray4',

  [SMALL_SCREEN]: {
    display: 'none',
  },
})

export const PresetDropdown = styled('div', {
  display: 'none',

  [SMALL_SCREEN]: {
    display: 'block',
    padding: '$3 $3 0',
  },
})

export const PresetMenu = styled(PopoverContent, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  padding: '$2',
})

export const PresetItem = styled('button', {
  all: 'unset',

  padding: '$2 $3',
  borderRadius: '$md',

  fontSize: '$xs',
  color: '$gray11',
  whiteSpace: 'nowrap',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: 'color-mix(in srgb, $gray4 50%, transparent)',
  },

  '&:focus-visible': {
    outline: '2px solid $primary9',
  },

  '&:disabled': {
    color: '$gray8',
    backgroundColor: 'transparent',
    cursor: 'not-allowed',
  },

  variants: {
    active: {
      true: {
        backgroundColor: '$primary3',
        color: '$primary11',

        '&:hover': {
          backgroundColor: '$primary4',
        },
      },
    },
  },
})
