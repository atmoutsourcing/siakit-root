import { styled } from '@siakit/core'

export const PasswordInputContainer = styled('div', {
  width: '100%',

  background: '$gray1',
  border: '2px solid $gray4',

  height: '$8',
  borderRadius: '$md',

  padding: '0 2px 0 12px',

  display: 'flex',
  alignItems: 'center',

  '&:has(input:focus)': {
    borderColor: '$primary9',
  },

  variants: {
    isErrored: {
      true: {
        backgroundColor: '$red3',
        borderColor: '$red9',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
        backgroundColor: '$gray4',
      },
    },
  },
})

export const Input = styled('input', {
  all: 'unset',

  flex: 1,

  height: '$full',
  marginRight: '$2.5',

  fontSize: '$sm',
  color: '$gray12',

  '&::placeholder': {
    color: '$gray8',
  },
})

export const Suffix = styled('div')
