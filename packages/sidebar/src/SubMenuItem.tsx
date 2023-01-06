import { useContext } from 'react'

import { styled } from '@siakit/core'

import { SidebarContext } from './Sidebar'

const Container = styled('a', {
  position: 'relative',
  minHeight: 32,
  padding: '6px 6px 6px 12px',

  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',

  fontSize: 14,

  color: '$gray9',

  '&:hover': {
    backgroundColor: '$gray4',
  },

  variants: {
    isSelected: {
      true: {
        backgroundColor: '$gray5',
        color: '$gray12',

        '&::before': {
          position: 'absolute',
          content: '',
          width: 2,
          top: 0,
          bottom: 0,
          left: 0,
          backgroundColor: '$gray12',
        },
      },
    },
  },
})

type SubMenuItemProps = {
  children: string
  onClick: () => void
}

export function SubMenuItem({ children, onClick }: SubMenuItemProps) {
  const { subMenuSelected, selectSubMenu } = useContext(SidebarContext)

  function handleSelectSubMenu() {
    selectSubMenu(children)
    onClick()
  }

  return (
    <Container
      isSelected={children === subMenuSelected}
      onClick={handleSelectSubMenu}
    >
      {children}
    </Container>
  )
}
