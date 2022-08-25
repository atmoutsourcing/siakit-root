import { Card } from '@siakit/card'
import { styled } from '@siakit/core'

const Container = styled(Card, {
  background: '$cardBackground',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  height: 48,
  padding: '0 8px',
  borderRadius: 0,

  transition: 'background-color 0.150s',

  '& > div': {
    display: 'flex',
    alignItems: 'center',

    '& button': {
      all: 'unset',
      boxSizing: 'border-box',
      cursor: 'pointer',

      height: 48,

      display: 'flex',
      alignItems: 'center',

      padding: '0 8px',
    },

    '& strong': {
      marginLeft: 8,
    },
  },
})

export { Container }
