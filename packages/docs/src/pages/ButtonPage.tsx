import { Button } from '@siakit/button'
import { Flex } from '@siakit/layout'

export function ButtonPage() {
  return (
    <Flex flex justify="center" align="center">
      <Button type="button" onClick={() => alert('test')} disabled>
        Button component
      </Button>
    </Flex>
  )
}
