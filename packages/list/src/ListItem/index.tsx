import { Color, useTheme } from '@siakit/core'
import { ReactNode } from 'react'

import { ListItemContainer } from './styles'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'

type ListItemProps = {
  children: ReactNode
  size?: Size
  color?: Color
}

export function ListItem({ children, size, color, ...props }: ListItemProps) {
  const { theme } = useTheme()

  function getColor() {
    if (color) {
      return `$${color}10`
    }

    return '$primary10'
  }

  return (
    <ListItemContainer
      size={size}
      css={
        theme === 'light'
          ? {
              '& a': {
                color: getColor(),
              },
              '& code': {
                backgroundColor: '$gray3',
                color: '$gray11',
              },
            }
          : {
              '& a': {
                color: getColor(),
              },
              '& code': {
                backgroundColor: '$gray5',
                color: '$gray11',
              },
            }
      }
      {...props}
    >
      {children}
    </ListItemContainer>
  )
}
