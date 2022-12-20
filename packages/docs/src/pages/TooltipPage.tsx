import { Button } from '@siakit/button'
import { Flex } from '@siakit/layout'
import { Tooltip } from '@siakit/tooltip'

export function TooltipPage() {
  return (
    <Flex flex align="center" justify="center">
      <Tooltip content="this is tooltip">
        <Button>button</Button>
      </Tooltip>
    </Flex>
  )
}
