import { Flex } from '@siakit/layout'
import { Ellipse, Rectangle } from '@siakit/shimmer'

export function ShimmerPage() {
  return (
    <Flex justify="center" align="center" gap>
      <Rectangle width={128} height={128} />
      <Ellipse width={128} height={128} />
    </Flex>
  )
}
