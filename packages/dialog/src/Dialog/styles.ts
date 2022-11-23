import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { keyframes, styled } from '@siakit/core'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const Overlay = styled(AlertDialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 9300,

  '&[data-state=open]': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
})

const Content = styled(AlertDialog.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  background: '$shape',
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  maxHeight: 'calc(100% - 32px)',
  overflow: 'clip',

  padding: 24,
  gap: 24,

  maxWidth: 272,

  '&:focus': {
    boxShadow: 'none',
  },
})

export { Overlay, Content }
