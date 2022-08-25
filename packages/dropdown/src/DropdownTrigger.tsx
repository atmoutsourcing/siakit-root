import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

interface DropdownTriggerProps {
  children: React.ReactNode
}

function DropdownTrigger({ children, ...props }: DropdownTriggerProps) {
  return (
    <DropdownMenu.Trigger asChild {...props}>
      {children}
    </DropdownMenu.Trigger>
  )
}

export { DropdownTrigger }
export type { DropdownTriggerProps }
