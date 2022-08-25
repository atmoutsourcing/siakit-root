import { Container } from './styles'

interface SpinnerProps {
  isInverted?: boolean
}

function Spinner({ isInverted, ...props }: SpinnerProps) {
  return (
    <Container
      css={{
        borderColor: isInverted ? '$gray11' : '$gray4',
        borderLeftColor: isInverted ? '$gray4' : '$gray11',
      }}
      {...props}
    />
  )
}

export { Spinner }
export type { SpinnerProps }
