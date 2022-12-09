import { ReactElement, useContext } from 'react'

import { styled, useTheme } from '@siakit/core'
import { Text } from '@siakit/text'
import { Tooltip } from '@siakit/tooltip'

import { SidebarContext } from './Sidebar'

const Container = styled('button', {
  position: 'relative',
  backgroundColor: 'transparent',
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

type MenuItemProps = {
  children: string
  value: string | number
  tooltip?: string
  icon?: ReactElement
  onClick?: () => void
  type?: 'action'
}

export function MenuItem({
  children,
  value,
  tooltip,
  icon,
  onClick,
  type,
}: MenuItemProps) {
  const { theme } = useTheme()
  const { minimized, selected, selectMenu } = useContext(SidebarContext)

  const shortName = children[0].toUpperCase()

  return (
    <Tooltip content={minimized ? tooltip : undefined} side="right">
      <Container
        onClick={() => {
          if (onClick) {
            onClick()
          }

          selectMenu({ value, minimize: type !== 'action' })
        }}
        isSelected={selected === value}
        isExpanded={!minimized}
        isDarkTheme={theme === 'dark'}
      >
        {minimized && icon && icon}
        {minimized && !icon && <Text>{shortName}</Text>}

        {!minimized && <Text>{children}</Text>}
      </Container>
    </Tooltip>
  )
}
