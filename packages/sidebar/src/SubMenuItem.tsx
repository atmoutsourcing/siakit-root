import { useContext } from 'react'

import { Badge } from '@siakit/badge'
import { styled, useTheme } from '@siakit/core'

import { SidebarContext } from './Sidebar'

const Container = styled('a', {
  position: 'relative',
  minHeight: 32,
  padding: '6px 6px 6px 12px',

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
  const { color } = useTheme()
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
