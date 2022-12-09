import { ReactNode, useContext } from 'react'

import { styled, useTheme } from '@siakit/core'
import { Flex } from '@siakit/layout'

import { SidebarContext } from './Sidebar'

type MenuProps = {
  children: ReactNode
}

const Container = styled(Flex, {
  backgroundColor: '$primary11',

  width: 240,

  '@media(max-width: 992px)': {
    display: 'none',
  },

  variants: {
    small: {
      true: {
        width: 48,
      },
    },
    isDarkTheme: {
      true: {
        backgroundColor: '$gray2',
      },
    },
  },
})

export function Menu({ children }: MenuProps) {
  const { minimized } = useContext(SidebarContext)
  const { theme } = useTheme()

  return (
    <Container
      small={minimized}
      direction="column"
      isDarkTheme={theme === 'dark'}
    >
      {children}
    </Container>
  )
}
