import { ComponentProps } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'
import { Badge } from '@siakit/badge'
import { useTheme } from '@siakit/core'

import { Content, SelectedElement, TabsItemContainer } from './styles'

type TabsItemProps = { badge?: number } & ComponentProps<
  typeof RadixTabs.Trigger
>

export function TabsItem({ children, badge, ...props }: TabsItemProps) {
  const { color } = useTheme()

  return (
    <TabsItemContainer {...props}>
      <Content>
        {children}
        {typeof badge === 'number' && <Badge color={color}>{badge}</Badge>}
      </Content>

      <SelectedElement />
    </TabsItemContainer>
  )
}
