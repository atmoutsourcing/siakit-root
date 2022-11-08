import { ReactElement, useContext } from 'react'

import { styled, useTheme } from '@siakit/core'
import { Text } from '@siakit/text'

import { SidebarContext } from './Sidebar'

type MenuItemProps = {
  children: string
  value: string | number
  icon?: ReactElement
}

const Container = styled('button', {
  position: 'relative',
  backgroundColor: '$primary11',
  paddingLeft: '$4',
  cursor: 'pointer',
  gap: '$3',
  display: 'flex',
  height: '$8',
  alignItems: 'center',
  border: 'none',
  color: '$gray6',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:hover': {
    background: `linear-gradient(
      to right,
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.04)
    )`,
  },

  variants: {
    isSelected: {
      true: {
        color: '$white',
        background: `linear-gradient(
          to right,
          rgba(255, 255, 255, 0.2),
          rgba(255, 255, 255, 0.04)
        )`,

        svg: {
          color: '$white',
        },

        '&:before': {
          position: 'absolute',
          content: '',
          top: 0,
          bottom: 0,
          left: 0,
          width: 2,
          backgroundColor: '$white',
        },
      },
    },
    isExpanded: {
      false: {
        padding: 0,
        justifyContent: 'center',
      },
    },
    isDarkTheme: {
      true: {
        color: '$gray11',
      },
    },
  },
})

export function MenuItem({ children, value, icon }: MenuItemProps) {
  const { theme } = useTheme()
  const { selected, selectMenu } = useContext(SidebarContext)

  return (
    <Container
      onClick={() => selectMenu(value)}
      isSelected={selected === value}
      isExpanded={!selected}
      isDarkTheme={theme === 'dark'}
    >
      {icon}

      {!selected && <Text>{children}</Text>}
    </Container>
  )
}
