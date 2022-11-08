import { styled } from '@siakit/core'

export const SidebarContainer = styled('div', {
  display: 'flex',
  width: 240,

  '@media (max-width: 992px)': {
    zIndex: 2,
    position: 'fixed',
    inset: 0,
    display: 'none',
  },

  variants: {
    isOpen: {
      true: {
        '@media (max-width: 992px)': {
          display: 'flex',
        },
      },
    },
  },
})

export const SidebarOverlay = styled('div', {
  zIndex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  inset: 0,
})
