import { Container } from './styles'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'

interface HeadingProps {
  children: string
  size?: Size
}

function Heading({ children, size, ...props }: HeadingProps): JSX.Element {
  return (
    <Container size={size} {...props}>
      {children}
    </Container>
  )
}

export { Heading }
export type { HeadingProps }
