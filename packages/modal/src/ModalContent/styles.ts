import * as Dialog from '@radix-ui/react-dialog'
import { styled, keyframes } from '@siakit/core'
import { IconButton } from '@siakit/icon-button'

export const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.9)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const contentHide = keyframes({
  '0%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
  '100%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.9)' },
})

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 9000,

  '&[data-state=open]': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
})

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  zIndex: 9005,

  background: '$shape',
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',

  maxHeight: 'calc(100% - 32px)',
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
    flex: 1,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },

  variants: {
    size: {
      xs: {
        maxWidth: 320,
        width: 'calc(100% - 32px)',
      },
      sm: {
        maxWidth: 540,
        width: 'calc(100% - 32px)',
      },
      md: {
        maxWidth: 768,
        width: 'calc(100% - 32px)',
      },
      lg: {
        maxWidth: 1024,
        width: 'calc(100% - 32px)',
      },
      xl: {
        maxWidth: 1280,
        width: 'calc(100% - 32px)',
      },
      '2xl': {
        maxWidth: 1536,
        width: 'calc(100% - 32px)',
      },
      full: {
        width: 'calc(100% - 32px)',
        height: 'calc(100% - 32px)',
      },
    },
  },
})

export const CloseButton = styled(IconButton, {
  position: 'absolute',
  top: 8,
  right: 8,
})
