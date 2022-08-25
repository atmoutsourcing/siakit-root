import React from 'react'

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@siakit/hover-card'
import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

import { Container, More } from './styles'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface AvatarGroupProps {
  children: React.ReactNode
  size?: Size
  showCount?: number
}

function AvatarGroup({
  children,
  size = 'md',
  showCount = 4,
  ...props
}: AvatarGroupProps) {
  return (
    <Container {...props}>
      {!Array.isArray(children) && (
        <>{React.cloneElement(children as React.ReactElement, { size })}</>
      )}

      {Array.isArray(children) && children.length > showCount && (
        <HoverCard>
          <HoverCardTrigger>
            <More size={size}>
              <strong>+{children.length - showCount}</strong>
            </More>
          </HoverCardTrigger>

          <HoverCardContent>
            <Flex direction="column" padding={12} gap={4}>
              {children.slice(showCount).map((child) => (
                <Flex key={child.props.name}>
                  <Text>{child.props.name}</Text>
                </Flex>
              ))}
            </Flex>
          </HoverCardContent>
        </HoverCard>
      )}

      {Array.isArray(children) &&
        React.Children.map(children.slice(0, showCount).reverse(), (child) => {
          return React.cloneElement(child, { size })
        })}
    </Container>
  )
}

export { AvatarGroup }
export type { AvatarGroupProps }
