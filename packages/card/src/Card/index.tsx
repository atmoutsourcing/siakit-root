import { ComponentProps, forwardRef } from 'react'
import { CardContainer } from './styles'

type CardProps = ComponentProps<typeof CardContainer>

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, ...props }, ref) => {
    return (
      <CardContainer ref={ref} {...props}>
        {children}
      </CardContainer>
    )
  },
)
