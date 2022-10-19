import { ReactNode } from 'react'

import { Card } from '@siakit/card'
import { Heading } from '@siakit/heading'
import { IconButton } from '@siakit/icon-button'
import { Flex } from '@siakit/layout'

interface PageHeaderProps {
  title?: string
  children?: ReactNode
  onGoBack?: () => void
}

export function PageHeader({ title, children, onGoBack }: PageHeaderProps) {
  return (
    <Card
      height={48}
      gap
      flexWrap="wrap"
      justify="between"
      align="center"
      padding="0 16px 0 8px"
      css={{ borderRadius: 0 }}
    >
      <Flex gap={8} padding={!onGoBack ? '0 0 0 8px' : 0} align="center">
        {onGoBack && (
          <IconButton variant="ghost" colorScheme="gray">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M18 10a.75.75 0 01-.75.75H4.612l5.158 4.96a.75.75 0 11-1.04 1.08l-6.5-6.25a.75.75 0 010-1.08l6.5-6.25a.75.75 0 111.04 1.08L4.612 9.25H17.25A.75.75 0 0118 10z"
                clipRule="evenodd"
              />
            </svg>
          </IconButton>
        )}

        {!!title && (
          <Heading size="xs" weight="medium">
            {title}
          </Heading>
        )}
      </Flex>

      {children}
    </Card>
  )
}
