import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

interface DropdownProps {
  children: React.ReactNode
}

function Dropdown({ children, ...props }: DropdownProps): JSX.Element {
  return <DropdownMenu.Root {...props}>{children}</DropdownMenu.Root>
}

export { Dropdown }
export type { DropdownProps }
