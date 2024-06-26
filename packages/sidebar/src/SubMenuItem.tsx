import { useContext } from 'react'

import { Badge } from '@siakit/badge'
import { Color, styled } from '@siakit/core'

import { SidebarContext } from './Sidebar'

const Container = styled('a', {
  position: 'relative',
  minHeight: 32,
  padding: '6px 6px 6px 12px',
  flexShrink: 0,

  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

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
  count?: number
}

export function SubMenuItem({ children, onClick, count }: SubMenuItemProps) {
  const color = (localStorage.getItem('@siakit:color') ?? '') as Color

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

      {typeof count === 'number' && <Badge color={color}>{count}</Badge>}
    </Container>
  )
}
