import { Color } from '@siakit/core'
import { ReactNode } from 'react'

import { BadgeContainer } from './styles'

interface BadgeProps {
  children: ReactNode
  color: Color
}

export function Badge({ children, color, ...props }: BadgeProps) {
  return (
    <BadgeContainer
      css={{ backgroundColor: `$${color}5`, color: `$${color}11` }}
      {...props}
    >
      {children}
    </BadgeContainer>
  )
}
