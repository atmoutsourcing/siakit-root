import * as RadixHoverCard from '@radix-ui/react-hover-card'

interface HoverCardProps {
  children: React.ReactNode
}

function HoverCard({ children, ...props }: HoverCardProps) {
  return <RadixHoverCard.Root {...props}>{children}</RadixHoverCard.Root>
}

export { HoverCard }
export type { HoverCardProps }
