import * as RadixHoverCard from '@radix-ui/react-hover-card'

interface HoverCardTriggerProps {
  children: React.ReactNode
}

function HoverCardTrigger({ children, ...props }: HoverCardTriggerProps) {
  return <RadixHoverCard.Trigger {...props}>{children}</RadixHoverCard.Trigger>
}

export { HoverCardTrigger }
export type { HoverCardTriggerProps }
