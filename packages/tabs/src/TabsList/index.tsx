import { ReactNode } from 'react'

import { Container } from './styles'

type TabsListProps = {
  children: ReactNode
}

export function TabsList({ children }: TabsListProps) {
  return <Container>{children}</Container>
}
