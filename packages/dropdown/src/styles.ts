import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { styled } from '@siakit/core'

const Container = styled('button', {
  display: 'flex',
  alignItems: 'center',

  border: 0,

  gap: 8,

  borderRadius: 8,

  fontSize: 14,
  fontWeight: 600,

  cursor: 'pointer',

  transition: 'all 0.150s',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      sm: {
        borderRadius: 6,

        fontSize: 12,

        height: 24,
        px: 12,

        '& svg': {
          width: 12,
          height: 12,
        },
      },
      md: {
        height: 32,
        px: 16,

        '& svg': {
          width: 16,
          height: 16,
        },
      },
      lg: {
        height: 40,
        px: 24,

        '& svg': {
          width: 20,
          height: 20,
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

const DropdownItemContainer = styled(DropdownMenu.Item, {
  padding: '6px 8px 6px 12px',

  display: 'flex',
  alignItems: 'center',

  gap: 8,

  cursor: 'pointer',

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

const DropdownSeparatorContainer = styled(DropdownMenu.Separator, {
  height: 1,
  backgroundColor: '$gray6',
  margin: 8,
})

export { Container, DropdownItemContainer, DropdownSeparatorContainer }
