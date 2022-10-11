import { ReactElement, useContext, useMemo } from 'react'
import { Tooltip } from '@siakit/tooltip'
import { SidebarContext } from '../contexts/SidebarContext'
import { MenuItemContainer } from './styles'
import { useTheme } from '@siakit/core'

type MenuItemProps = {
  children: string
  value: string

  onClick?: () => void
  icon?: ReactElement
  activeIcon?: ReactElement

  tooltip?: string
}

export function MenuItem({
  children,
  value,
  onClick,
  icon,
  activeIcon,
  tooltip,
}: MenuItemProps) {
  const { theme } = useTheme()
  const { menuItemSelected, selectMenuItem, isExpanded } =
    useContext(SidebarContext)

  const isSelected = useMemo(
    () => menuItemSelected === value,
    [menuItemSelected],
  )

  const shortName = children[0].toUpperCase()
  return (
    <Tooltip content={!isExpanded ? tooltip : undefined} side="right">
      <MenuItemContainer
        onClick={() => {
          if (selectMenuItem) {
            selectMenuItem(value)
          }

          if (onClick) {
            onClick()
          }
        }}
        isSelected={isSelected}
        isExpanded={!!isExpanded}
        isDarkTheme={theme === 'dark'}
      >
        {!isSelected && !!icon && <>{icon}</>}
        {isSelected && !!activeIcon ? (
          <>{activeIcon}</>
        ) : (
          isSelected && !activeIcon && !!icon && <>{icon}</>
        )}

        {!isExpanded && !icon && shortName}

        {isExpanded && children}
      </MenuItemContainer>
    </Tooltip>
  )
}
