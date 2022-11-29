import { ReactNode } from 'react'

import { Flex } from '@siakit/layout'

import { Sidebar } from '../../components/Sidebar'

type DefaultLayoutProps = {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Flex flex overflow>
      <Sidebar />

      {children}
    </Flex>
  )
}
