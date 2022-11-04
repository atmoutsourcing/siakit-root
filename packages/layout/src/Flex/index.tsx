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

function processFlex(flex: boolean | number | undefined) {
  if (!flex) {
    return
  }

  if (typeof flex === 'boolean' && flex === true) {
    return 1
  }

  return flex
}

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

          flex: processFlex(flex),

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
      </FlexContainer>
    )
  },
)
