import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ReactNode } from 'react'

interface DropdownTriggerProps {
  children: ReactNode
}

export function DropdownTrigger({ children, ...props }: DropdownTriggerProps) {
  return (
    <DropdownMenu.Trigger asChild style={{ cursor: 'pointer' }} {...props}>
      {children}
    </DropdownMenu.Trigger>
  )
}
