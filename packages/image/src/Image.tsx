import * as AspectRatio from '@radix-ui/react-aspect-ratio'

import { Container } from './styles'

interface ImageProps {
  src: string
  alt: string
  ratio?: number
}

function Image({ src, alt, ratio, ...props }: ImageProps): JSX.Element {
  return (
    <Container>
      <AspectRatio.Root ratio={ratio} {...props}>
        <img
          src={src}
          alt={alt}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
      </AspectRatio.Root>
    </Container>
  )
}

export { Image }
export type { ImageProps }
