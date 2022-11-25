import { EllipseContainer } from './styles'

interface EllipseProps {
  flex?: boolean
  width: number | string
  height: number | string
}

export function Ellipse({ flex, width, height, ...props }: EllipseProps) {
  return (
    <EllipseContainer
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
