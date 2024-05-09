import { styled } from '@siakit/core'

export const Container = styled('div', {
  flex: 1,
  border: '2px dashed $gray7',
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$sm',
  height: 128,

  variants: {
    isDragActive: {
      true: {
        borderColor: '$primary9',
      },
    },
    isErrored: {
      true: {
        true: {
          backgroundColor: '$red3',
          borderColor: '$red9',
        },
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
  },
})
