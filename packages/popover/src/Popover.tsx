import * as RadixPopover from '@radix-ui/react-popover'

interface PopoverProps {
  children: React.ReactNode
}

function Popover({ children, ...props }: PopoverProps) {
  return <RadixPopover.Root {...props}>{children}</RadixPopover.Root>
}

export { Popover }
export type { PopoverProps }
