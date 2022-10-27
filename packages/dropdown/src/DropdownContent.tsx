import { ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Card } from '@siakit/card'

type DropdownContentProps = {
  children: ReactNode
} & DropdownMenu.MenuContentProps

export function DropdownContent({ children, ...props }: DropdownContentProps) {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content sideOffset={4} asChild {...props}>
        <Card
          direction="column"
          padding="8px 0"
          minWidth={192}
          maxWidth={320}
          css={{ zIndex: 5 }}
        >
          {children}
        </Card>
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  )
}
