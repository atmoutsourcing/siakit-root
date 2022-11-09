import { ReactElement, useContext } from 'react'

import { Flex } from '@siakit/layout'

import { SidebarContext } from './Sidebar'

type MenuHeaderProps = {
  children: ReactElement[]
  onClick?: () => void
}

export function MenuHeader({ children, onClick }: MenuHeaderProps) {
  const { minimized, selectMenu, selectSubMenu } = useContext(SidebarContext)

  function handleClick() {
    selectMenu({ value: null, minimize: false })
    selectSubMenu(null)

    if (onClick) {
      onClick()
    }
  }

  return (
    <Flex
      width="$full"
      height={48}
      align="center"
      onClick={handleClick}
      css={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {!minimized && children[0]}
      {!!minimized && children[1]}
    </Flex>
  )
}
