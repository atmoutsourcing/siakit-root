import { Flex } from '@siakit/layout'
import { ProgressBar as ProgressBarComponent } from '@siakit/progress-bar'

export function ProgressBar() {
  return (
    <Flex flex direction="column" gap padding>
      <ProgressBarComponent progress={25} showPercentage />
      <ProgressBarComponent progress={50} showPercentage colorScheme="red" />
      <ProgressBarComponent progress={75} showPercentage colorScheme="green" />
    </Flex>
  )
}
