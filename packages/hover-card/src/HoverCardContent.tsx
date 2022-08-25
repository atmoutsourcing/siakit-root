import * as RadixHoverCard from '@radix-ui/react-hover-card'
import { Card } from '@siakit/card'

interface HoverCardContentProps {
  children: React.ReactNode
  side?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
}

function HoverCardContent({
  children,
  side,
  align,
  ...props
}: HoverCardContentProps) {
  return (
    <RadixHoverCard.Portal>
      <RadixHoverCard.Content
        sideOffset={4}
        side={side}
        align={align}
        {...props}
      >
        <Card maxWidth={320}>{children}</Card>
      </RadixHoverCard.Content>
    </RadixHoverCard.Portal>
  )
}

export { HoverCardContent }
export type { HoverCardContentProps }
