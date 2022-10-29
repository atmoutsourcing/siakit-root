import {
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
  shadows,
} from '@siakit/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

import { baseTheme } from './themes/base'

export const {
  styled,
  globalCss,
  keyframes,
  createTheme,
  theme: themeKeys,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors: baseTheme,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
    shadows,
  },
})
