import { forwardRef } from 'react'

import { Heading } from '@siakit/heading'
import { Tooltip } from '@siakit/tooltip'

import { AvatarContainer } from './styles'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

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

const headingSize = {
  xs: 'xxs',
  sm: 'xxs',
  md: 'xs',
  lg: 'sm',
  xl: 'md',
  '2xl': 'lg',
  '3xl': '2xl',
} as const

type HeadingSizeType = keyof typeof headingSize
type HeadingSizeValues = typeof headingSize[HeadingSizeType]

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
          {!src && !!name && (
            <Heading
              size={headingSize[size] as HeadingSizeValues}
              weight="medium"
              lowContrast
            >
              {renderShortName()}
            </Heading>
          )}
        </AvatarContainer>
      </Tooltip>
    )
  },
)
