import * as Dialog from '@radix-ui/react-dialog'

type DrawerTriggerProps = Dialog.DialogTriggerProps

export function DrawerTrigger({ children, ...props }: DrawerTriggerProps) {
  return (
    <Dialog.Trigger asChild {...props}>
      {children}
    </Dialog.Trigger>
  )
}
