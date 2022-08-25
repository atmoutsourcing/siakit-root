import * as RadixPopover from '@radix-ui/react-popover'
import { Card } from '@siakit/card'

interface PopoverContentProps {
  children: React.ReactNode
  side?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
}

function PopoverContent({
  children,
  side,
  align,
  ...props
}: PopoverContentProps) {
  return (
    <RadixPopover.Portal>
      <RadixPopover.Content sideOffset={4} side={side} align={align} {...props}>
        <Card maxWidth={320}>{children}</Card>
      </RadixPopover.Content>
    </RadixPopover.Portal>
  )
}

export { PopoverContent }
export type { PopoverContentProps }
