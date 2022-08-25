import { EllipseContainer } from './styles'

interface EllipseProps {
  width: number | string
  height: number | string
}

function Ellipse({ width, height, ...props }: EllipseProps): JSX.Element {
  return (
    <EllipseContainer
      css={{
        width: typeof width === 'number' ? `${width}px` : width,
        maxWidth: typeof width === 'number' ? `${width}px` : width,

        height: typeof height === 'number' ? `${height}px` : height,
        maxHeight: typeof height === 'number' ? `${height}px` : height,
      }}
      {...props}
    />
  )
}

export { Ellipse }
export type { EllipseProps }
