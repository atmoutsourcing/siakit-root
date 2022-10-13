import { styled } from '@siakit/core'

export const ColorPickerContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
})

export const ColorButton = styled('button', {
  width: '$8',
  height: '$8',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  lineHeight: 0,

  backgroundColor: 'transparent',
  border: '1px solid transparent',
  borderRadius: '$sm',

  cursor: 'pointer',

  '&:not(:disabled):hover': {
    borderColor: '$gray5',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    isSelected: {
      true: {
        borderColor: '$gray5',
      },
    },
  },
})

export const ColorItem = styled('span', {
  width: '$5',
  height: '$5',
  borderRadius: '$full',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
