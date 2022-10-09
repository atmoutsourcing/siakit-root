import { styled } from '@siakit/core'

export const Sufix = styled('button', {
  backgroundColor: 'transparent',
  border: 0,
  cursor: 'pointer',

  marginLeft: 4,

  height: 20,
  width: 20,

  alignSelf: 'center',
  display: 'flex',
  alignItems: 'center',

  color: '$gray9',

  boxShadow: 'none',

  svg: {
    width: 16,
    height: 16,
  },
})
