import { styled } from '@siakit/core'

export const FileInputContainer = styled('form', {
  position: 'relative',

  input: {
    display: 'none',
  },
})

export const Content = styled('label', {
  display: 'flex',
  justifyContent: 'center',

  gap: '$4',
  padding: '$6',
  backgroundColor: '$shape',
  border: '2px dashed $gray4',
  borderRadius: '$md',

  cursor: 'pointer',

  transition: 'all 0.150s',

  '&:hover': {
    backgroundColor: '$gray1',
    borderColor: '$gray6',
  },

  variants: {
    dragActive: {
      true: {
        backgroundColor: '$primary2',
        borderColor: '$primary9',
      },
    },
    isErrored: {
      true: {
        backgroundColor: '$red2',
        borderColor: '$red9',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
        backgroundColor: '$gray4',

        '&:hover': {
          backgroundColor: '$gray4',
          borderColor: '$gray4',
        },
      },
    },
  },
})
