import * as AspectRatio from '@radix-ui/react-aspect-ratio'

import { ImageContainer } from './styles'

type ImageProps = {
  src: string
  alt: string
  ratio?: number
}

export function Image({ src, alt, ratio, ...props }: ImageProps) {
  return (
    <ImageContainer>
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
    </ImageContainer>
  )
}
