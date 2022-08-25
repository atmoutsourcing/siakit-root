import { Button } from '@siakit/button'
import { Flex } from '@siakit/layout'
import { Tooltip } from '@siakit/tooltip'

export function TooltipPage() {
  return (
    <Flex>
      <Tooltip content="Lorem Ipsum Lorem Ipsum">
        <Button type="button">Button tooltip</Button>
      </Tooltip>
    </Flex>
  )
}
