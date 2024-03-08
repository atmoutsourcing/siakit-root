import { MouseEvent, ReactNode } from 'react'

import { DropdownItemContainer } from './styles'
import { Tooltip } from '@siakit/tooltip'

type Type = 'info' | 'success' | 'warning' | 'danger' | 'default'

interface DropdownItemProps {
  children: ReactNode
  type?: Type
  icon?: ReactNode
  disabled?: boolean
  tooltip?: string
  onClick?: (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void
}

export function DropdownItem({
  children,
  type = 'default',
  icon,
  disabled,
  tooltip,
  onClick,
  ...props
}: DropdownItemProps) {

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    if (!disabled && onClick) {
      onClick(event)
    }
  }

  return (
    <Tooltip content={tooltip}>
      <DropdownItemContainer data-disabled={disabled} onClick={handleClick} variant={type} {...props}>
        {icon}

        <span>{children}</span>
      </DropdownItemContainer>
    </Tooltip>
  )
}
