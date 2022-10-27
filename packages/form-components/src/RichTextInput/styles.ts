import { styled } from '@siakit/core'

export const RichTextInputContainer = styled('div', {
  width: '100%',

  background: '$gray1',
  border: '2px solid $gray4',

  borderRadius: '$md',

  display: 'flex',
  flexDirection: 'column',

  '&:has(input:focus)': {
    borderColor: '$primary9',
  },

  '.ProseMirror': {
    flex: 1,
    overflow: 'auto',
    minHeight: 320,

    padding: 16,

    fontSize: 16,

    outline: 0,

    '> * + *': {
      marginTop: '0.75em',
    },

    a: {
      color: '$primary9',
    },

    'ul, ol': {
      padding: '0 1rem',
    },

    '.editor-task-list': {
      padding: 0,

      li: {
        display: 'flex',
        gap: 8,
      },
    },

    'h1, h2, h3, h4, h5, h6': {
      lineHeight: 1.1,
    },

    pre: {
      backgroundColor: '$gray3',
      padding: 16,
      borderRadius: 8,

      code: {
        fontSize: '$sm',
        fontFamily: 'monospace',
      },
    },

    img: {
      display: 'block',
      maxWidth: '100%',
      height: 'auto',
    },

    blockquote: {
      borderLeftStyle: 'solid',
      borderLeftWidth: 3,
      borderLeftColor: '$gray6',
      paddingLeft: '1rem',
    },

    hr: {
      border: 'none',
      borderTop: '2px solid rgba(#0d0d0d, 0.1)',
      margin: '2rem 0',
    },

    'p.is-editor-empty:first-child::before': {
      color: '#adb5bd',
      content: 'attr(data-placeholder)',
      float: 'left',
      height: 0,
      pointerEvents: 'none',
    },
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
