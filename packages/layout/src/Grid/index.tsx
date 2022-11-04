import { ComponentProps, ElementType } from 'react'

import { GridContainer } from './styles'

type FlexProps = {
  columns: number | string
  rows?: number | string

  flex?: boolean | number
  margin?: boolean | number | string
  padding?: boolean | number | string
  gap?: boolean | number | string

  width?: number | string
  minWidth?: number | string
  maxWidth?: number | string

  height?: number | string
  minHeight?: number | string
  maxHeight?: number | string

  as?: ElementType
} & ComponentProps<typeof GridContainer>

function processSize(size: boolean | number | string | undefined) {
  if (!size) {
    return
  }

  if (typeof size === 'boolean' && size === true) {
    return '16px'
  }

  if (typeof size === 'number') {
    return `${size}px`
  }

  return size
}

export function Grid({
  columns,
  rows,
  flex,
  margin,
  padding,
  gap,
  width,
  minWidth,
  maxWidth,

  height,
  minHeight,
  maxHeight,
  css,
  children,
  ...props
}: FlexProps) {
  return (
    <GridContainer
      css={{
        ...css,

        gridTemplateColumns:
          typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns,
        gridTemplateRows:
          typeof rows === 'number' ? `repeat(${rows}, 1fr)` : rows,

        flex: typeof flex === 'boolean' ? 1 : flex,

        margin: processSize(margin),

        padding: processSize(padding),

        gap: processSize(gap),

        width,
        minWidth,
        maxWidth,

        height,
        minHeight,
        maxHeight,
      }}
      {...props}
    >
      {children}
    </GridContainer>
  )
}
