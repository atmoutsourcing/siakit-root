import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Card } from '@siakit/card'

interface DropdownContentProps {
  children: React.ReactNode
  side?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
}

function DropdownContent({
  children,
  side,
  align,
  ...props
}: DropdownContentProps) {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        sideOffset={4}
        side={side}
        align={align}
        asChild
        {...props}
      >
        <Card direction="column" padding="8px 0" minWidth={192} maxWidth={320}>
          {children}
        </Card>
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  )
}

export { DropdownContent }
export type { DropdownContentProps }
