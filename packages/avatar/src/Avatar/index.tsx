import { Tooltip } from '@siakit/tooltip'
import { forwardRef } from 'react'

import { AvatarContainer } from './styles'

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

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ name, src, size = 'md', badge = false, ...props }, ref) => {
    function renderShortName(): string {
      if (name) {
        const nameSplitted = name.split(' ').filter((item) => Boolean(item))

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
        <AvatarContainer
          ref={ref}
          badge={badge}
          size={size}
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
        </AvatarContainer>
      </Tooltip>
    )
  },
)