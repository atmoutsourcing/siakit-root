import * as RadixHoverCard from '@radix-ui/react-hover-card'
import { Card } from '@siakit/card'
import { ComponentProps, ReactNode } from 'react'

type HoverCardContentProps = {
  children: ReactNode
} & ComponentProps<typeof RadixHoverCard.Content>

function HoverCardContent({ children, ...props }: HoverCardContentProps) {
  return (
    <RadixHoverCard.Portal>
      <RadixHoverCard.Content sideOffset={4} {...props}>
        <Card maxWidth={320}>{children}</Card>
      </RadixHoverCard.Content>
    </RadixHoverCard.Portal>
  )
}

export { HoverCardContent }
export type { HoverCardContentProps }
