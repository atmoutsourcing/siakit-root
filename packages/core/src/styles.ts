import { createStitches } from '@stitches/react'
import {
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
  shadows,
} from '@siakit/tokens'
import { light } from './themes/light'

export const {
  styled,
  globalCss,
  keyframes,
  createTheme,
  theme: themeKeys,
} = createStitches({
  theme: {
    colors: light,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
    shadows,
  },
})
