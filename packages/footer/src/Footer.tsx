import { ReactNode } from 'react'

import { useTheme } from '@siakit/core'

import { FooterContainer, FooterLeftContainer } from './styles'

interface FooterProps {
  children: ReactNode
}

interface FooterLeftProps {
  children: ReactNode
}

function Footer({ children, ...props }: FooterProps): JSX.Element {
  const { theme } = useTheme()

  return (
    <FooterContainer
      css={{ backgroundColor: theme === 'light' ? '$gray3' : '$gray5' }}
      {...props}
    >
      {children}
    </FooterContainer>
  )
}

function FooterLeft({ children, ...props }: FooterLeftProps): JSX.Element {
  return <FooterLeftContainer {...props}>{children}</FooterLeftContainer>
}

export { Footer, FooterLeft }
export type { FooterProps, FooterLeftProps }
