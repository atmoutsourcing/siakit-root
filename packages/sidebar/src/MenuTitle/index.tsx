import { useContext } from 'react'

import { useTheme } from '@siakit/core'

import { SidebarContext } from '../contexts/SidebarContext'
import { MenuTitleContainer } from './styles'

type MenuTitleProps = {
  children: string
}

export function MenuTitle({ children }: MenuTitleProps) {
  const { theme } = useTheme()

  const { isExpanded } = useContext(SidebarContext)

  return (
    <MenuTitleContainer isExpanded={isExpanded} isDarkTheme={theme === 'dark'}>
      {isExpanded ? children : `${children.slice(0, 4)}.`}
    </MenuTitleContainer>
  )
}
