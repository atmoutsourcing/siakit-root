import { ComponentProps } from 'react'

import { useTheme } from '@siakit/core'

import { FooterContainer } from './styles'

type FooterProps = ComponentProps<typeof FooterContainer>

export function Footer({ children, ...props }: FooterProps) {
  const { theme } = useTheme()

  return (
    <FooterContainer
      css={{ backgroundColor: theme === 'light' ? '$gray2' : '$gray5' }}
      {...props}
    >
      {children}
    </FooterContainer>
  )
}
