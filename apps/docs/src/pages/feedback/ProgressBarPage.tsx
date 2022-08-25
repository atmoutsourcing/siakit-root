import { Flex } from '@siakit/layout'
import { ProgressBar } from '@siakit/progress-bar'

export function ProgressBarPage() {
  return (
    <Flex direction="column" padding={32} gap>
      <ProgressBar progress={70} />
      <ProgressBar progress={35} showPercentage />
    </Flex>
  )
}
