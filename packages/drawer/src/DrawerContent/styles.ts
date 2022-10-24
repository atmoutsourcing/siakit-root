import * as Dialog from '@radix-ui/react-dialog'
import { styled, keyframes } from '@siakit/core'
import { IconButton } from '@siakit/icon-button'

export const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translateX(5%)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const contentHide = keyframes({
  '0%': { opacity: 1, transform: 'translateX(0)' },
  '100%': { opacity: 0, transform: 'translateX(5%)' },
})

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 9000,
  display: 'flex',

  '&[data-state=open]': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
})

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,

  zIndex: 9005,

  background: '$shape',
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',

  height: '100%',

  overflow: 'clip',

  '&[data-state=open]': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state=closed]': {
    animation: `${contentHide} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&:focus': { outline: 'none' },

  '& header': {
    display: 'flex',
    justifyContent: 'space-between',
  },

  '& > div': {
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },

  variants: {
    size: {
      xs: {
        maxWidth: 320,
        width: '100%',
      },
      sm: {
        maxWidth: 540,
        width: '100%',
      },
      md: {
        maxWidth: 768,
        width: '100%',
      },
      lg: {
        maxWidth: 1024,
        width: '100%',
      },
      xl: {
        maxWidth: 1280,
        width: '100%',
      },
      '2xl': {
        maxWidth: 1536,
        width: '100%',
      },
      full: {
        width: '100%',
        height: '100%',
      },
    },
  },
})

export const CloseButton = styled(IconButton, {
  position: 'absolute',
  top: 8,
  right: 8,
})
