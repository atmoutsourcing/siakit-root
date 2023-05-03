import { Outlet } from 'react-router-dom'

import { Flex } from '@siakit/layout'

import { Sidebar } from './Sidebar'

export function DefaultLayout() {
  return (
    <Flex overflow>
      <Sidebar />

      <Outlet />

      <Flex width={320}>aside</Flex>
    </Flex>
  )
}
