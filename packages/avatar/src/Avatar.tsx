import { Tooltip } from '@siakit/tooltip'

import { Container } from './styles'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

type AvatarBaseProps = {
  size?: Size
  badge?: boolean
}

interface AvatarNameProps extends AvatarBaseProps {
  name: string
  src?: string
}

interface AvatarImageProps extends AvatarBaseProps {
  name?: string
  src: string
}

type AvatarProps = AvatarNameProps | AvatarImageProps

function Avatar({
  name,
  src,
  size = 'md',
  badge = false,
  ...props
}: AvatarProps) {
  const avatarColors = [
    'gray',
    'red',
    'pink',
    'violet',
    'indigo',
    'green',
    'orange',
    'brown',
  ]

  const colorIndex = Math.floor(Math.random() * 8)

  function renderShortName(): string {
    if (name) {
      const nameSplitted = name.split(' ')

      if (nameSplitted.length === 1) {
        return nameSplitted[0][0].toUpperCase()
      }

      if (nameSplitted.length > 1) {
        return `${nameSplitted[0][0]}${
          nameSplitted[nameSplitted.length - 1][0]
        }`.toUpperCase()
      }
    }

    return ''
  }

  return (
    <Tooltip content={name ?? ''}>
      <Container
        badge={badge}
        size={size}
        colorScheme={
          avatarColors[colorIndex] as
            | 'gray'
            | 'red'
            | 'pink'
            | 'violet'
            | 'indigo'
            | 'green'
            | 'orange'
            | 'brown'
        }
        css={
          src
            ? {
                background: `url(${src}) no-repeat center`,
                backgroundSize: 'cover',
              }
            : {}
        }
        {...props}
      >
        {!src && !!name && <strong>{renderShortName()}</strong>}
      </Container>
    </Tooltip>
  )
}

export { Avatar }
export type { AvatarProps }
