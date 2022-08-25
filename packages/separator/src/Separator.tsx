import { Container } from './styles'

type Direction = 'horizontal' | 'vertical'

interface SeparatorProps {
  direction?: Direction
}

function Separator({
  direction = 'horizontal',
  ...props
}: SeparatorProps): JSX.Element {
  return <Container direction={direction} {...props} />
}

export { Separator }
export type { SeparatorProps }
