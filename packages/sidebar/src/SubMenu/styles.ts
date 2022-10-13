import { styled } from '@siakit/core'

export const SubMenuContainer = styled('div', {
  flex: 1,

  height: '100%',

  display: 'flex',
  flexDirection: 'column',

  overflowY: 'auto',

  backgroundColor: '$shape',
  outline: '1px solid $gray4',
  zIndex: 1,
})
