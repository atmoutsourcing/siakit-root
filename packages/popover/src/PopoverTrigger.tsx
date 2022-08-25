import * as RadixPopover from '@radix-ui/react-popover'

interface PopoverTriggerProps {
  children: React.ReactNode
}

function PopoverTrigger({ children, ...props }: PopoverTriggerProps) {
  return (
    <RadixPopover.Trigger asChild {...props}>
      {children}
    </RadixPopover.Trigger>
  )
}

export { PopoverTrigger }
export type { PopoverTriggerProps }
