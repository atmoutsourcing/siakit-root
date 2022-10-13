import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'
import { ReactNode } from 'react'

interface DropdownLabelProps {
  children: ReactNode
}

export function DropdownLabel({ children, ...props }: DropdownLabelProps) {
  return (
    <DropdownMenu.Label asChild {...props}>
      <Flex padding="4px 8px 0 12px">
        <Text size="xs" lowContrast>
          {children}
        </Text>
      </Flex>
    </DropdownMenu.Label>
  )
}
