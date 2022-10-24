import { ComponentProps } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'

type TabsContentProps = ComponentProps<typeof RadixTabs.Content>

export function TabsContent({ children, ...props }: TabsContentProps) {
  return (
    <RadixTabs.Content {...props} asChild>
      {children}
    </RadixTabs.Content>
  )
}
