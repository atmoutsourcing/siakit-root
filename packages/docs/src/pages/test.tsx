import { FileInput } from '@siakit/form-components'
import { Flex } from '@siakit/layout'

export function Test() {
  return (
    <Flex flex padding>
      <FileInput onDrop={console.log} />
    </Flex>
  )
}
