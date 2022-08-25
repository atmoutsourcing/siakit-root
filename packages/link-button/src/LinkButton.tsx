import { Color } from '@siakit/core'

import { Container } from './styles'

interface LinkButtonProps {
  children: string
  type: 'button' | 'submit'
  colorScheme?: Color
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  icon?: React.ReactElement
}

function LinkButton({
  children,
  type,
  colorScheme,
  size,
  icon,
  ...props
}: LinkButtonProps): JSX.Element {
  return (
    <Container
      type={type}
      size={size}
      css={{ color: colorScheme ? `$${colorScheme}11` : '$primary11' }}
      {...props}
    >
      {icon}

      {children}
    </Container>
  )
}

export { LinkButton }
export type { LinkButtonProps }
