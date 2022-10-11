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

        margin:
          typeof margin === 'boolean'
            ? 16
            : typeof margin === 'number'
            ? `${margin}px`
            : margin,

        padding:
          typeof padding === 'boolean'
            ? 16
            : typeof padding === 'number'
            ? `${padding}px`
            : padding,

        gap:
          typeof gap === 'boolean'
            ? 16
            : typeof gap === 'number'
            ? `${gap}px`
            : gap,

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
