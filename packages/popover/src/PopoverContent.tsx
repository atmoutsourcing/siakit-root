import * as RadixPopover from '@radix-ui/react-popover'
import { Card } from '@siakit/card'
import { ReactNode } from 'react'

interface PopoverContentProps {
  children: ReactNode
  side?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
}

export function PopoverContent({
  children,
  side,
  align,
  ...props
}: PopoverContentProps) {
  return (
    <RadixPopover.Portal>
      <RadixPopover.Content sideOffset={4} side={side} align={align} asChild {...props}>
        <Card maxWidth={320} css={{ zIndex: 10000 }}>{children}</Card>
      </RadixPopover.Content>
    </RadixPopover.Portal>
  )
}
