import { forwardRef } from 'react'

import { styled } from '@stitches/react'

const Container = styled('div', {
  display: 'grid',
})

type Overflow = 'auto' | 'hidden' | 'scroll' | 'unset'

interface GridProps {
  children: React.ReactNode

  columns: number | string

  flex?: boolean | number
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
  align?: 'center' | 'flex-start' | 'flex-end' | 'baseline'

  width?: number | string
  height?: number | string

  minWidth?: number | string
  minHeight?: number | string

  maxWidth?: number | string
  maxHeight?: number | string

  padding?: boolean | number | string
  margin?: boolean | number | string
  gap?: boolean | number | string

  overflow?: boolean | Overflow
}

const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      children,

      columns,

      flex,
      justify,
      align,

      width,
      height,

      minWidth,
      minHeight,

      maxWidth,
      maxHeight,

      padding,
      margin,
      gap,

      overflow,

      ...props
    },
    ref,
  ) => {
    return (
      <Container
        ref={ref}
        css={{
          gridTemplateColumns:
            typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns,

          flex: typeof flex === 'boolean' ? 1 : flex,

          justifyContent: justify,
          alignItems: align,

          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,

          minWidth: typeof minWidth === 'number' ? `${minWidth}px` : minWidth,
          minHeight:
            typeof minHeight === 'number' ? `${minHeight}px` : minHeight,

          maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
          maxHeight:
            typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,

          padding: typeof padding === 'boolean' ? 16 : padding,
          margin: typeof margin === 'boolean' ? 16 : margin,
          gap: typeof gap === 'boolean' ? 16 : gap,

          overflow: typeof overflow === 'boolean' ? 'auto' : overflow,
        }}
        {...props}
      >
        {children}
      </Container>
    )
  },
)

export { Grid }
export type { GridProps }
