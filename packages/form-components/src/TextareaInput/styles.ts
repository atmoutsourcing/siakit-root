import { styled } from '@siakit/core'

export const TextAreaInputContainer = styled('div', {
  position: 'relative',
  width: '100%',

  background: '$gray1',
  border: '2px solid $gray4',

  minHeight: '$8',
  borderRadius: '$md',

  padding: '2px 2px 2px 12px',

  display: 'flex',
  alignItems: 'flex-start',

  '&:has(textarea:focus)': {
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

export const TextArea = styled('textarea', {
  outline: 0,
  border: 0,
  backgroundColor: 'transparent',

  flex: 1,

  marginRight: '$2.5',

  fontSize: '$sm',
  color: '$gray12',

  padding: '$1 $7 $1 0',
  lineHeight: '$shorter',

  resize: 'vertical',

  '&::placeholder': {
    color: '$gray8',
  },
})

export const Suffix = styled('div', {
  position: 'absolute',
  top: 2,
  right: 2,
  marginLeft: 2,
})
