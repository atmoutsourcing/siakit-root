import { styled, keyframes } from '@siakit/core'

const placeholderShimmer = keyframes({
  '0%': {
    backgroundPosition: '-1000px 0',
  },
  '100%': {
    backgroundPosition: '1000px 0',
  },
})

const BaseShimmer = styled('div', {
  flex: 1,
  background: '$gray4',
  backgroundImage: `
    linear-gradient(
      to right,
      $gray4 0%,
      $gray6 20%,
      $gray4 40%,
      $gray4 100%
    )
  `,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '2000px 1000px',
  display: 'inline-block',
  position: 'relative',

  animationDuration: '1s',
  animationFillMode: 'forwards',
  animationIterationCount: 'infinite',
  animationName: `${placeholderShimmer}`,
  animationTimingFunction: 'linear',
})

export const RectangleContainer = styled(BaseShimmer, {
  borderRadius: 8,
})

export const EllipseContainer = styled(BaseShimmer, {
  borderRadius: '50%',
})
