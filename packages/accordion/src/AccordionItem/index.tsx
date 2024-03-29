import { ReactNode } from 'react'

import * as RadixAccordion from '@radix-ui/react-accordion'
import { Badge } from '@siakit/badge'
import { Color } from '@siakit/core'
import { Flex } from '@siakit/layout'

import {
  AccordionItemContainer,
  AccordionItemContent,
  AccordionItemTrigger,
} from './styles'

interface AccordionItemProps {
  value: string
  title: ReactNode
  badge?: {
    label: number | string
    color: Color
  }
  children: ReactNode
}

function AccordionItem({
  value,
  title,
  badge,
  children,
  ...props
}: AccordionItemProps) {
  return (
    <AccordionItemContainer value={value} {...props}>
      <RadixAccordion.Header asChild>
        <AccordionItemTrigger>
          <Flex flex gap={8}>
            {typeof title === 'string' ? <strong>{title}</strong> : title}

            {badge?.label && (
              <Badge color={badge.color}>{String(badge.label)}</Badge>
            )}
          </Flex>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none" />
            <polyline
              points="96 48 176 128 96 208"
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            />
          </svg>
        </AccordionItemTrigger>
      </RadixAccordion.Header>

      <AccordionItemContent>{children}</AccordionItemContent>
    </AccordionItemContainer>
  )
}

export { AccordionItem }
export type { AccordionItemProps }
