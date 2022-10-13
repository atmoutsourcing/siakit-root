import { Text } from '@siakit/text'

import { ProgressBarContainer, Content, Bar } from './styles'

interface ProgressBarProps {
  progress: number
  showPercentage?: boolean
}

export function ProgressBar({
  progress,
  showPercentage,
  ...props
}: ProgressBarProps) {
  return (
    <ProgressBarContainer {...props}>
      <Content>
        <Bar
          css={{
            width: `${progress}%`,
          }}
        />
      </Content>

      {showPercentage && <Text size="xs">{progress}%</Text>}
    </ProgressBarContainer>
  )
}
