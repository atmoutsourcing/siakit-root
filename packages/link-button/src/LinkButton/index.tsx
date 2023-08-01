import { Color } from '@siakit/core'
import { ComponentProps } from 'react'

import { LinkButtonContainer } from './styles'

type LinkButtonProps = {
  colorScheme?: Color
  variant?: 'primary' | 'secondary' | 'ghost'
} & ComponentProps<typeof LinkButtonContainer>

export function LinkButton({
  colorScheme,
  variant,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <LinkButtonContainer
      css={{ color: colorScheme ? `$${colorScheme}10` : '$primary10' }}
      {...props}
    >
      {children}
    </LinkButtonContainer>
  )
}
