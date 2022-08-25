import { DropdownItemContainer } from './styles'

type Type = 'info' | 'success' | 'warning' | 'danger' | 'default'

interface DropdownItemProps {
  children: React.ReactNode
  type?: Type
  icon?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

function DropdownItem({
  children,
  type = 'default',
  icon,
  onClick,
  ...props
}: DropdownItemProps) {
  return (
    <DropdownItemContainer variant={type} onClick={onClick} {...props}>
      {icon}

      <span>{children}</span>
    </DropdownItemContainer>
  )
}

export { DropdownItem }

export type { DropdownItemProps }
