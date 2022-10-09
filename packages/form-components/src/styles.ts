import { styled } from '@siakit/core'

const InputContainer = styled('div', {
  display: 'flex',

  backgroundColor: '$gray1',
  border: '2px solid $gray4',
  height: 32,
  borderRadius: 8,
  padding: '0 4px 0 12px',

  transition: 'all 0.15s',

  '& input': {
    all: 'unset',

    flex: 1,

    fontSize: '14px',
    color: '$gray12',

    marginRight: 8,

    '&::placeholder': {
      color: '$gray9',
    },
  },

  '& > button': {
    alignSelf: 'center',
  },

  '& > button[data-clear="true"]': {
    visibility: 'hidden',
  },

  variants: {
    isFocused: {
      true: {
        backgroundColor: '$gray1',
        borderColor: '$primary9',
      },
    },
    isFilled: {
      true: {
        backgroundColor: '$gray1',

        '& > button[data-clear="true"]': {
          visibility: 'visible',
        },
      },
    },
    isErrored: {
      true: {
        backgroundColor: '$red3',
        borderColor: '$red9',
      },
    },
    disabled: {
      true: {
        backgroundColor: '$gray4',
      },
    },
  },
})

const TextAreaContainer = styled(InputContainer, {
  height: 'auto',
  minHeight: 32,

  '& textarea': {
    all: 'unset',

    flex: 1,

    fontSize: '14px',
    color: '$gray12',

    padding: '4px 0',

    '&::placeholder': {
      color: '$gray9',
    },
  },

  '& > button[data-clear="true"]': {
    alignSelf: 'flex-start',
    marginTop: 4,
  },
})

export { InputContainer, TextAreaContainer }
