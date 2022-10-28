import { styled } from '@siakit/core'

export const SidebarContainer = styled('div', {
  display: 'flex',
  width: 240,
  zIndex: 0,
  overflow: 'auto',

  '@media (max-width: 992px)': {
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
