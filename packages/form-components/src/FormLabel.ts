import { styled } from '@siakit/core'

export const FormLabel = styled('label', {
  color: '$gray11',
  fontSize: '$sm',
  fontWeight: '$regular',
  transition: 'color 0.150s',

  variants: {
    isErrored: {
      true: {
        color: '$red11',
      },
    },
  },
})
