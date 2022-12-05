import { ReactNode } from 'react'

import * as RadixPopover from '@radix-ui/react-popover'

import { Content } from './styles'

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
    <RadixPopover.Portal container={document.getElementById('siakit-popover')}>
      <Content sideOffset={4} side={side} align={align} {...props}>
        {children}
      </Content>
    </RadixPopover.Portal>
  )
}
