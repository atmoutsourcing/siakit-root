import { Container } from './styles'

interface ListProps {
  children: React.ReactNode
  type?: 'unordered' | 'ordered'
}

function List({ type = 'unordered', children }: ListProps): JSX.Element {
  return (
    <Container as={type === 'unordered' ? 'ul' : 'ol'}>{children}</Container>
  )
}

export { List }
export type { ListProps }
