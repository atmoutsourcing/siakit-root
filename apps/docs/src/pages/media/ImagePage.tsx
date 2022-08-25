import { Image } from '@siakit/image'
import { Flex } from '@siakit/layout'

export function ImagePage() {
  return (
    <Flex flex justify="center" align="center">
      <Flex width={320}>
        <Image
          src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=50"
          alt=""
        />
      </Flex>
    </Flex>
  )
}
