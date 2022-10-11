import { globalCss } from './styles'

export const applyGlobalCss = globalCss({
  '*': {
    margin: '$0',
    padding: '$0',
    boxSizing: 'border-box',
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
