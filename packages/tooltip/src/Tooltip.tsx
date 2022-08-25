import * as RadixTooltip from '@radix-ui/react-tooltip'
import { useTheme } from '@siakit/core'

import { Arrow, Container } from './styles'

interface TooltipProps {
  children: React.ReactNode
  content: string
  side?: 'bottom' | 'left' | 'top' | 'right'
  align?: 'start' | 'center' | 'end'
}

function Tooltip({ children, content, side, align }: TooltipProps) {
  const { theme } = useTheme()

  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={500}>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

        {!!content && (
          <RadixTooltip.Portal>
            <RadixTooltip.Content side={side} align={align}>
              <Arrow css={{ fill: theme === 'light' ? '$gray12' : '$white' }} />

              <Container
                css={
                  theme === 'light'
                    ? {
                        backgroundColor: '$gray12',
                      }
                    : {
                        backgroundColor: '$white',
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

export { Tooltip }
export type { TooltipProps }
