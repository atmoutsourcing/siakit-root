import { MouseEvent, ReactNode } from 'react'
import { DropdownItemContainer } from './styles'

type Type = 'info' | 'success' | 'warning' | 'danger' | 'default'

interface DropdownItemProps {
  children: ReactNode
  type?: Type
  icon?: ReactNode
  onClick?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export function DropdownItem({
  children,
  type = 'default',
  icon,
  onClick,
  ...props
}: DropdownItemProps) {
  return (
    <DropdownItemContainer variant={type} {...props}>
      {icon}

      <span>{children}</span>
    </DropdownItemContainer>
  )
}
