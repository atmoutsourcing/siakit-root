import { styled } from '@siakit/core'

const FormLabel = styled('label', {
  color: '$gray12',
  fontSize: '14px',
  fontWeight: 400,
  transition: 'color 0.150s',

  variants: {
    isErrored: {
      true: {
        color: '$red11',
      },
    },
  },
})

export { FormLabel }
