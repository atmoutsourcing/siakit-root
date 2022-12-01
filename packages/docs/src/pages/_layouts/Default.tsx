import { ReactNode } from 'react'

import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

import { Sidebar } from '../../components/Sidebar'

type DefaultLayoutProps = {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Flex flex overflow>
      <Sidebar />

      <Flex flex justify="center">
        <Flex direction="column" width={'100%'} maxWidth={736}>
          {children}
        </Flex>
      </Flex>

      <Flex width={240}>
        <Text>time</Text>
      </Flex>
    </Flex>
  )
}
