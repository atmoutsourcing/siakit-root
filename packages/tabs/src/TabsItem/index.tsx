import { ComponentProps } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'
import { Badge } from '@siakit/badge'

import { TabsItemContainer } from './styles'

type TabsItemProps = { badge?: number } & ComponentProps<
  typeof RadixTabs.Trigger
>

export function TabsItem({ children, badge, ...props }: TabsItemProps) {
  return (
    <TabsItemContainer {...props}>
      {children}
      {badge && <Badge color="gray">{badge}</Badge>}
    </TabsItemContainer>
  )
}
