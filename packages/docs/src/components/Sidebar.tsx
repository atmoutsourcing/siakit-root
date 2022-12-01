import { Link } from 'react-router-dom'

import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

export function Sidebar() {
  return (
    <Flex direction="column" width={240}>
      <Text>sidebar</Text>
      <Link to="/">home</Link>
      <Link to="/button">button</Link>
      <Link to="/test">test</Link>
    </Flex>
  )
}
