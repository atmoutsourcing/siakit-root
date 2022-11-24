import { ReactNode } from 'react'

import { Container, Placeholder } from './styles'

type TabsListProps = {
  children: ReactNode
}

export function TabsList({ children }: TabsListProps) {
  return (
    <Container>
      {children}
      <Placeholder />
    </Container>
  )
}
