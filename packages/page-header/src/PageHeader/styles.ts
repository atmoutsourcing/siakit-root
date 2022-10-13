import { styled } from '@siakit/core'

export const PageHeaderContainer = styled('div', {
  background: '$shape',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  height: 48,
  padding: '0 8px',
  borderRadius: 0,

  transition: 'background-color 0.150s',
  outline: '1px solid $gray4',

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

      '& svg': {
        width: 16,
        height: 16,
      },
    },

    '& h2': {
      marginLeft: 8,
    },
  },
})
