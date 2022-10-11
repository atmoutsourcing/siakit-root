import { Color } from '@siakit/core'
import { ComponentProps } from 'react'

import { ButtonContainer } from './styles'

type ButtonProps = {
  colorScheme?: Color
} & ComponentProps<typeof ButtonContainer>

export function Button({ colorScheme, children, css, ...props }: ButtonProps) {
  const currentColor = localStorage.getItem('@siakit:color') as Color

  const colorsContrast = ['sky', 'mint', 'lime', 'yellow', 'amber']

  return (
    <ButtonContainer
      css={{
        ...css,

        color: colorsContrast.includes(colorScheme ?? currentColor)
          ? '$black'
          : '$white',

        backgroundColor: `$${colorScheme ?? 'primary'}9`,

        '&:hover': {
          backgroundColor: `$${colorScheme ?? 'primary'}10`,
        },
      }}
      {...props}
    >
      {children}
    </ButtonContainer>
  )
}
