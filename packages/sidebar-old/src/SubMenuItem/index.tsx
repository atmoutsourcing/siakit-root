import { useContext } from 'react'

import { SidebarContext } from '../contexts/SidebarContext'
import { SubMenuItemContainer } from './styles'

type SubMenuItemProps = {
  children: string
  index?: number
  onClick: () => void
}

export function SubMenuItem({ children, index, onClick }: SubMenuItemProps) {
  const { selectSubMenuItem, subMenuItemSelected } = useContext(SidebarContext)

  function handleClick(): void {
    if (typeof index === 'number') {
      selectSubMenuItem(index)

      if (onClick) {
        onClick()
      }
    }
  }

  return (
    <SubMenuItemContainer
      isSelected={subMenuItemSelected === index}
      onClick={handleClick}
    >
      {children}
    </SubMenuItemContainer>
  )
}
