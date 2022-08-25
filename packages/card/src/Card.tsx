import { forwardRef } from 'react'

import { FlexProps } from '@siakit/layout'

import { Container } from './styles'

type CardProps = FlexProps

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, ...props }, ref) => {
    return (
      <Container ref={ref} {...props}>
        {children}
      </Container>
    )
  },
)

export { Card }
export type { CardProps }
