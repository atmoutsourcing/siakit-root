import { EllipseContainer } from './styles'

interface EllipseProps {
  width: number | string
  height: number | string
}

export function Ellipse({ width, height, ...props }: EllipseProps) {
  return (
    <EllipseContainer
      css={{
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
