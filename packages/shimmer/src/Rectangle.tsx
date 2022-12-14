import { RectangleContainer } from './styles'

interface RectangleProps {
  width: number | string
  height: number | string
}

function Rectangle({ width, height, ...props }: RectangleProps): JSX.Element {
  return (
    <RectangleContainer
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

export { Rectangle }
export type { RectangleProps }
