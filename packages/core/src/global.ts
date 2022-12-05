import { globalCss } from './styles'

export const applyGlobalCss = globalCss({
  '*': {
    margin: '$0',
    padding: '$0',
    boxSizing: 'border-box',
  },

  '#siakit-popover': {
    zIndex: 10000,
  },

  '::-webkit-scrollbar': {
    marginBottom: 10,
    width: 14,
    height: 14,
    borderRadius: 24,
  },

  '::-webkit-scrollbar-track': {
    borderRadius: 4,
  },

  '::-webkit-scrollbar-thumb': {
    borderRadius: 24,
    boxShadow: 'inset 0 0 10px 10px $colors$gray7',
    border: 'solid 4px transparent',
  },

  '::selection': {
    backgroundColor: '$primary5',
  },

  '#root': {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },

  body: {
    color: '$textTitle',
    backgroundColor: '$appBackground',
  },

  'body, input, textarea, button': {
    fontFamily: '$default',
    fontWeight: '$regular',
  },

  'h6, h5, h4, h3, h2, h1, strong': {
    fontWeight: '$bold',
  },
})
