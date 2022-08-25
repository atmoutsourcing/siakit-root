import * as Dialog from '@radix-ui/react-dialog'

interface ModalProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (value: boolean) => void
}

function Modal({ children, open, onOpenChange, ...props }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange} {...props}>
      {children}
    </Dialog.Root>
  )
}

export { Modal }
export type { ModalProps }
