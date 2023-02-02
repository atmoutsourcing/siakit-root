import ReactSelect from 'react-select'

import { styled } from '@siakit/core'

export const SelectMultiContainer = styled(ReactSelect, {
  '.react-select__control': {
    border: '2px solid $gray4',
    minHeight: 32,
    borderRadius: 8,
    backgroundColor: '$gray1',
    boxShadow: 'none',
    cursor: 'pointer',
    transition: 'all 0.150s',

    '&:hover': {
      borderColor: '$gray4',
    },
  },

  '.react-select__control.react-select__control--is-focused': {
    borderColor: '$primary9',
  },

  '.react-select__value-container': {
    padding: '0 10px',
  },

  '.react-select__placeholder': {
    fontSize: '14px',
    color: '$gray8',
  },

  '.react-select__input, .react-select__single-value': {
    fontSize: '14px',
    color: '$gray12',
  },

  '.react-select__indicators': {
    height: 28,

    '.react-select__clear-indicator': {
      padding: 0,
    },

    '.react-select__indicator-separator': {
      display: 'none',
    },

    '.react-select__indicator.react-select__dropdown-indicator, .react-select__indicator.react-select__clear-indicator':
      {
        padding: '0 4px',
        color: '$gray8',
      },
  },

  '.react-select__multi-value': {
    backgroundColor: '$gray4',

    '.react-select__multi-value__label': {
      color: '$gray12',
      fontSize: '12px',
      whiteSpace: 'normal',
    },

    '.react-select__multi-value__remove': {
      color: '$gray11',

      '&:hover': {
        backgroundColor: '$red3',
        color: '$red9',
      },
    },
  },

  '.react-select__control--is-disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    backgroundColor: '$gray4',
  },

  variants: {
    isErrored: {
      true: {
        '.react-select__control, .react-select__control:hover, .react-select__control.react-select__control--is-focused':
          {
            backgroundColor: '$red3',
            borderColor: '$red9',
          },
      },
    },
  },
})
