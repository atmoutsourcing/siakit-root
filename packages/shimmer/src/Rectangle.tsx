import { RectangleContainer } from './styles'

interface RectangleProps {
  flex?: boolean
  width?: number | string
  height?: number | string
}

export function Rectangle({ flex, width, height, ...props }: RectangleProps) {
  return (
    <RectangleContainer
      css={{
        flex: flex ? 1 : 0,
        
        width: typeof width === 'number' ? `${width}px` : width,
        minWidth: typeof width === 'number' ? `${width}px` : width,
        maxWidth: typeof width === 'number' ? `${width}px` : width,

        height: typeof height === 'number' ? `${height}px` : height,
        minHeight: typeof height === 'number' ? `${height}px` : height,
        maxHeight: typeof height === 'number' ? `${height}px` : height,
      }}
      {...props}
    />
  )
}
