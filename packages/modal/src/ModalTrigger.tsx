import * as Dialog from '@radix-ui/react-dialog'

type ModalTriggerProps = Dialog.DialogTriggerProps

export function ModalTrigger({ children, ...props }: ModalTriggerProps) {
  return (
    <Dialog.Trigger asChild {...props}>
      {children}
    </Dialog.Trigger>
  )
}
