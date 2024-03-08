import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { styled } from '@siakit/core'

export const DropdownItemContainer = styled(DropdownMenu.Item, {
  padding: '6px 8px 6px 12px',

  display: 'flex',
  alignItems: 'center',

  gap: 8,

  cursor: 'pointer',

  '&[data-disabled=true]': {
    opacity: 0.5,
    cursor: 'not-allowed',
    outline: 'none',

    '&:hover': {
      backgroundColor: 'transparent'
    }
  },

  '& svg': {
    width: 14,
    height: 14,
  },

  '& span': {
    flex: 1,
    fontSize: 14,
    lineHeight: '16px',
  },

  variants: {
    variant: {
      default: {
        color: '$gray12',

        '&:hover': {
          backgroundColor: '$gray4',
        },
      },
      info: {
        color: '$indigo11',

        '&:hover': {
          backgroundColor: '$indigo4',
        },
      },
      success: {
        color: '$green11',

        '&:hover': {
          backgroundColor: '$green4',
        },
      },
      warning: {
        color: '$amber11',

        '&:hover': {
          backgroundColor: '$amber4',
        },
      },
      danger: {
        color: '$red11',

        '&:hover': {
          backgroundColor: '$red4',
        },
      },
    },
  },
})
