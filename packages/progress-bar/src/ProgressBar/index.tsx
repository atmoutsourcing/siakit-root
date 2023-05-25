import { Text } from '@siakit/text'

import { ProgressBarContainer, Content, Bar } from './styles'
import { Color } from '@siakit/core'

interface ProgressBarProps {
  progress: number
  showPercentage?: boolean
  colorScheme?: Color
}

export function ProgressBar({
  progress,
  showPercentage,
  colorScheme,
  ...props
}: ProgressBarProps) {
  return (
    <ProgressBarContainer {...props}>
      <Content>
        <Bar
          css={{
            width: `${progress}%`,
            backgroundColor: `$${colorScheme ?? 'primary'}9`,
          }}
        />
      </Content>

      {showPercentage && <Text size="xs">{progress}%</Text>}
    </ProgressBarContainer>
  )
}
