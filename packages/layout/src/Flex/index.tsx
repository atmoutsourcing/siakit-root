import { ComponentProps, ElementType, forwardRef } from 'react'
import { FlexContainer } from './styles'

type FlexProps = {
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
} & ComponentProps<typeof FlexContainer>

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
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
    },
    ref,
  ) => {
    return (
      <FlexContainer
        ref={ref}
        css={{
          ...css,

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
      </FlexContainer>
    )
  },
)
