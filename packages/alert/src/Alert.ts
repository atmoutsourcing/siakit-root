import { styled } from '@siakit/core'

export const Alert = styled('div', {
  padding: 16,
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  border: '1px solid',

  fontSize: 14,

  '& strong': {
    fontWeight: 700,
    textTransform: 'uppercase',
  },

  variants: {
    type: {
      info: {
        backgroundColor: '$indigo3',
        borderColor: '$indigo8',

        color: '$indigo11',
      },
      success: {
        backgroundColor: '$grass3',
        borderColor: '$grass8',

        color: '$grass11',
      },
      warning: {
        backgroundColor: '$amber3',
        borderColor: '$amber8',

        color: '$amber11',
      },
      danger: {
        backgroundColor: '$red3',
        borderColor: '$red8',

        color: '$red11',
      },
    },
  },
})
