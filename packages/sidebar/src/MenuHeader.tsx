import { ReactElement, useContext } from 'react'

import { Flex } from '@siakit/layout'

import { SidebarContext } from './Sidebar'

type MenuHeaderProps = {
  children: ReactElement[]
  onClick?: () => void
}

export function MenuHeader({ children, onClick }: MenuHeaderProps) {
  const { selected, selectMenu, selectSubMenu } = useContext(SidebarContext)

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
      {!selected && children[0]}
      {!!selected && children[1]}
    </Flex>
  )
}
