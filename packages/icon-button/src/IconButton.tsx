import { Color } from '@siakit/core'

import { Container } from './styles'

interface IconButtonProps {
  type: 'button' | 'submit'
  icon: React.ReactElement
  colorScheme?: Color
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'ghost'
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

function IconButton({
  type,
  colorScheme,
  size,
  variant = 'primary',
  icon,
  ...props
}: IconButtonProps): JSX.Element {
  function neutralColor(): string {
    const currentColor = colorScheme ?? localStorage.getItem('color') ?? ''

    if (['sky', 'mint', 'lime', 'yellow', 'amber'].includes(currentColor)) {
      return '$black'
    }

    return '$white'
  }

  function getColor(scale: number): string {
    if (colorScheme) {
      return `$${colorScheme}${scale}`
    }

    return `$primary${scale}`
  }

  return (
    <Container
      type={type}
      size={size}
      css={
        variant === 'ghost'
          ? {
              backgroundColor: 'transparent',
              color: getColor(11),

              '&:hover:not([disabled])': {
                backgroundColor: getColor(4),
              },
            }
          : variant === 'secondary'
          ? {
              backgroundColor: getColor(4),
              color: getColor(11),

              '&:hover:not([disabled])': {
                backgroundColor: getColor(5),
              },
            }
          : {
              backgroundColor: getColor(9),
              color: neutralColor(),

              '&:hover:not([disabled])': {
                backgroundColor: getColor(10),
              },
            }
      }
      {...props}
    >
      {icon}
    </Container>
  )
}

export { IconButton }
export type { IconButtonProps }
