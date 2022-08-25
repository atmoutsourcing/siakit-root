import { Card } from '@siakit/card'
import { Flex } from '@siakit/layout'
import { Spinner } from '@siakit/spinner'

export function SpinnerPage() {
  return (
    <Flex direction="column">
      <Card height={320} justify="center" align="center" gap={64}>
        <Spinner />
        <Spinner isInverted />
      </Card>
    </Flex>
  )
}
