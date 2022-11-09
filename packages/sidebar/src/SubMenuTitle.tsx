import { ReactNode } from 'react'

import { styled } from '@siakit/core'

type SubMenuTitleProps = {
  children: ReactNode
}

const Container = styled('div', {
  minHeight: 32,
  height: 32,

  padding: '0 0 6px 12px',

  display: 'flex',
  alignItems: 'flex-end',

  color: '$gray8',
  textTransform: 'uppercase',
  fontSize: 10,
  fontWeight: '$medium',
})

export function SubMenuTitle({ children }: SubMenuTitleProps) {
  return <Container>{children}</Container>
}
