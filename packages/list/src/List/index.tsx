import { ReactNode } from 'react'
import { ListContainer } from './styles'

interface ListProps {
  children: ReactNode
  type?: 'unordered' | 'ordered'
}

export function List({ type = 'unordered', children }: ListProps) {
  return (
    <ListContainer as={type === 'unordered' ? 'ul' : 'ol'}>
      {children}
    </ListContainer>
  )
}
