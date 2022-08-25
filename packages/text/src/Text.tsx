import { Color, useTheme } from '@siakit/core'

import { Container } from './styles'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'

interface TextProps {
  children: React.ReactNode
  size?: Size
  lowContrast?: boolean
  align?: 'left' | 'center' | 'right'
  color?: Color
}

function Text({
  children,
  size,
  lowContrast,
  align,
  color,
  ...props
}: TextProps): JSX.Element {
  const { theme } = useTheme()

  function getColor() {
    if (color) {
      return `$${color}10`
    }

    return '$primary10'
  }

  return (
    <Container
      size={size}
      lowContrast={lowContrast}
      align={align}
      css={
        theme === 'light'
          ? {
              '& a': {
                color: getColor(),
              },
              '& code': {
                backgroundColor: '$gray3',
                color: '$gray11',
              },
            }
          : {
              '& a': {
                color: getColor(),
              },
              '& code': {
                backgroundColor: '$gray5',
                color: '$gray11',
              },
            }
      }
      {...props}
    >
      {children}
    </Container>
  )
}

export { Text }
export type { TextProps }
