import { Color } from '@siakit/core'

import { Container } from './styles'

interface BadgeProps {
  children: string
  color: Color
  icon?: React.ReactElement
}

function Badge({ children, color, icon, ...props }: BadgeProps): JSX.Element {
  return (
    <Container
      css={{ backgroundColor: `$${color}5`, color: `$${color}11` }}
      {...props}
    >
      {icon}

      {children}
    </Container>
  )
}

export { Badge }
export type { BadgeProps }
