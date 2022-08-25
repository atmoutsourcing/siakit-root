import { Text } from '@siakit/text'

import { Bar, Container, Content } from './styles'

interface ProgressBarProps {
  progress: number
  showPercentage?: boolean
}

function ProgressBar({
  progress,
  showPercentage,
  ...props
}: ProgressBarProps): JSX.Element {
  return (
    <Container {...props}>
      <Content>
        <Bar
          css={{
            width: `${progress}%`,
          }}
        />
      </Content>

      {showPercentage && <Text size="xs">{progress}%</Text>}
    </Container>
  )
}

export { ProgressBar }
export type { ProgressBarProps }
