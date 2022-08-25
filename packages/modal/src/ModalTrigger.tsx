import * as Dialog from '@radix-ui/react-dialog'

interface ModalTriggerProps {
  children: React.ReactNode
}

function ModalTrigger({ children, ...props }: ModalTriggerProps) {
  return (
    <Dialog.Trigger asChild {...props}>
      {children}
    </Dialog.Trigger>
  )
}

export { ModalTrigger }
export type { ModalTriggerProps }
