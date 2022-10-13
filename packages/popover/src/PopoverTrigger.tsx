import * as RadixPopover from '@radix-ui/react-popover'

type PopoverTriggerProps = RadixPopover.PopoverTriggerProps

export function PopoverTrigger({ children, ...props }: PopoverTriggerProps) {
  return (
    <RadixPopover.Trigger asChild {...props}>
      {children}
    </RadixPopover.Trigger>
  )
}
