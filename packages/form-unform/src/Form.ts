import { styled } from '@siakit/core'
import { Form as UnformForm } from '@unform/web'

export const Form = styled(UnformForm, {
  display: 'flex',
  flexDirection: 'column',

  gap: '$2',

  variants: {
    flex: {
      true: {
        flex: 1,
      },
    },
  },
})
