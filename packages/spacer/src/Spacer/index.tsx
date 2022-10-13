import { SpacerContainer } from './styles'

type SpacerHeight = {
  height: boolean | number | string
  width?: boolean | number | string
}

type SpacerWidth = {
  height?: boolean | number | string
  width: boolean | number | string
}

type SpacerProps = SpacerHeight | SpacerWidth

export function Spacer({ width, height, ...props }: SpacerProps) {
  return (
    <SpacerContainer
      css={{
        width:
          typeof width === 'boolean'
            ? 16
            : typeof width === 'number'
            ? `${width}px`
            : width,

        height:
          typeof height === 'boolean'
            ? 16
            : typeof height === 'number'
            ? `${height}px`
            : height,
      }}
      {...props}
    />
  )
}
