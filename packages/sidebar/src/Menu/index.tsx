import { ReactNode, useContext } from 'react'

import { useTheme } from '@siakit/core'

import { SidebarContext } from '../contexts/SidebarContext'
import { MenuContainer } from './styles'

type MenuProps = {
  children: ReactNode
}

export function Menu({ children }: MenuProps) {
  const { theme } = useTheme()

  const { isExpanded } = useContext(SidebarContext)

  return (
    <MenuContainer isExpanded={isExpanded} isDarkTheme={theme === 'dark'}>
      {children}
    </MenuContainer>
  )
}
