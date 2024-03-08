import { ReactNode } from 'react'

import * as RadixTooltip from '@radix-ui/react-tooltip'
import { useTheme } from '@siakit/core'

import { Arrow, Container } from './styles'

interface TooltipProps {
  children: ReactNode
  content: string | undefined
  side?: 'bottom' | 'left' | 'top' | 'right'
  align?: 'start' | 'center' | 'end'
}

export function Tooltip({ children, content, side, align }: TooltipProps) {
  const { theme } = useTheme()

  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={500}>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

        {!!content && (
          <RadixTooltip.Portal>
            <RadixTooltip.Content
              side={side}
              align={align}
              style={{ zIndex: 10005 }}
            >
              <Arrow css={{ fill: theme === 'dark' ? '$white' : '$gray12' }} />

              <Container
                css={
                  theme === 'dark'
                    ? {
                      backgroundColor: '$white',
                    }
                    : {
                      backgroundColor: '$gray12',
                    }
                }
              >
                {content}
              </Container>
            </RadixTooltip.Content>
          </RadixTooltip.Portal>
        )}
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
