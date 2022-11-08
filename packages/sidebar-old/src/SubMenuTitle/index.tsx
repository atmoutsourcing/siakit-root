import { ReactNode } from 'react'
import { SubMenuTitleContainer } from './styles'

type SubMenuTitleProps = {
  children: ReactNode
}

export function SubMenuTitle({ children }: SubMenuTitleProps) {
  return <SubMenuTitleContainer>{children}</SubMenuTitleContainer>
}
