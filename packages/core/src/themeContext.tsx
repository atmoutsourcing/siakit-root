import { createContext, ReactNode, useContext, useState } from 'react'

import { createStitches } from '@stitches/react'

import { amber } from './themes/amber'
import { baseTheme, baseLightTheme, baseDarkTheme } from './themes/base'
import { blue } from './themes/blue'
import { brown } from './themes/brown'
import { crimson } from './themes/crimson'
import { cyan } from './themes/cyan'
import { grass } from './themes/grass'
import { gray } from './themes/gray'
import { green } from './themes/green'
import { indigo } from './themes/indigo'
import { lime } from './themes/lime'
import { mint } from './themes/mint'
import { orange } from './themes/orange'
import { pink } from './themes/pink'
import { plum } from './themes/plum'
import { purple } from './themes/purple'
import { red } from './themes/red'
import { sky } from './themes/sky'
import { teal } from './themes/teal'
import { tomato } from './themes/tomato'
import { violet } from './themes/violet'
import { yellow } from './themes/yellow'

const { styled, keyframes, createTheme, globalCss } = createStitches({
  theme: {
    colors: baseTheme,
  },
  utils: {
    px: (value: number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
  },
})

const tomatoLightTheme = createTheme({
  colors: {
    ...baseLightTheme,
    ...tomato,
  },
})
const tomatoDarkTheme = createTheme({
  colors: {
    ...baseDarkTheme,
    ...tomato,
  },
})

const redLightTheme = createTheme({
  colors: {
    ...baseLightTheme,
    ...red,
  },
})
const redDarkTheme = createTheme({
  colors: {
    ...baseDarkTheme,
    ...red,
  },
})

const crimsonLightTheme = createTheme({
  colors: {
    ...baseLightTheme,
    ...crimson,
  },
})
const crimsonDarkTheme = createTheme({
  colors: {
    ...baseDarkTheme,
    ...crimson,
  },
})

const pinkLightTheme = createTheme({
  colors: {
    ...baseLightTheme,
    ...pink,
  },
})
const pinkDarkTheme = createTheme({
  colors: {
    ...baseDarkTheme,
    ...pink,
  },
})

const plumLightTheme = createTheme({
  colors: {
    ...baseLightTheme,
    ...plum,
  },
})
const plumDarkTheme = createTheme({
  colors: {
    ...baseDarkTheme,
    ...plum,
  },
})

const purpleLightTheme = createTheme({
  colors: {
    ...baseLightTheme,
    ...purple,
  },
})
const purpleDarkTheme = createTheme({
  colors: {
    ...baseDarkTheme,
    ...purple,
  },
})

const violetLightTheme = createTheme({
  colors: {
    ...baseLightTheme,
    ...violet,
  },
})
const violetDarkTheme = createTheme({
  colors: {
    ...baseDarkTheme,
    ...violet,
  },
})

const indigoLightTheme = createTheme({
  colors: {
    ...baseLightTheme,
    ...indigo,
  },
})
const indigoDarkTheme = createTheme({
  colors: {
    ...baseDarkTheme,
    ...indigo,
  },
})

const blueLightTheme = createTheme({
  colors: {
    ...baseLightTheme,
    ...blue,
  },
})
const blueDarkTheme = createTheme({
  colors: {
    ...baseDarkTheme,
    ...blue,
  },
})

const cyanLightTheme = createTheme({
  colors: {
    ...baseLightTheme,
    ...cyan,
  },
})
const cyanDarkTheme = createTheme({
  colors: {
    ...baseDarkTheme,
    ...cyan,
  },
})

const tealLightTheme = createTheme({
  colors: {
    ...baseLightTheme,
    ...teal,
  },
})
const tealDarkTheme = createTheme({
  colors: {
    ...baseDarkTheme,
    ...teal,
  },
})

const greenLightTheme = createTheme({
  colors: {
    ...baseLightTheme,
    ...green,
  },
})
const greenDarkTheme = createTheme({
  colors: {
    ...baseDarkTheme,
    ...green,
  },
})

const grassLightTheme = createTheme({
  colors: {
    ...baseLightTheme,
    ...grass,
  },
})
const grassDarkTheme = createTheme({
  colors: {
    ...baseDarkTheme,
    ...grass,
  },
})

const orangeLightTheme = createTheme({
  colors: {
    ...baseLightTheme,
    ...orange,
  },
})
const orangeDarkTheme = createTheme({
  colors: {
    ...baseDarkTheme,
    ...orange,
  },
})

const brownLightTheme = createTheme({
  colors: {
    ...baseLightTheme,
    ...brown,
  },
})
const brownDarkTheme = createTheme({
  colors: {
    ...baseDarkTheme,
    ...brown,
  },
})

const skyLightTheme = createTheme({
  colors: {
    ...baseLightTheme,
    ...sky,
  },
})
const skyDarkTheme = createTheme({
  colors: {
    ...baseDarkTheme,
    ...sky,
  },
})

const mintLightTheme = createTheme({
  colors: {
    ...baseLightTheme,
    ...mint,
  },
})
const mintDarkTheme = createTheme({
  colors: {
    ...baseDarkTheme,
    ...mint,
  },
})

const limeLightTheme = createTheme({
  colors: {
    ...baseLightTheme,
    ...lime,
  },
})
const limeDarkTheme = createTheme({
  colors: {
    ...baseDarkTheme,
    ...lime,
  },
})

const yellowLightTheme = createTheme({
  colors: {
    ...baseLightTheme,
    ...yellow,
  },
})
const yellowDarkTheme = createTheme({
  colors: {
    ...baseDarkTheme,
    ...yellow,
  },
})

const amberLightTheme = createTheme({
  colors: {
    ...baseLightTheme,
    ...amber,
  },
})
const amberDarkTheme = createTheme({
  colors: {
    ...baseDarkTheme,
    ...amber,
  },
})

const grayLightTheme = createTheme({
  colors: {
    ...baseLightTheme,
    ...gray,
  },
})
const grayDarkTheme = createTheme({
  colors: {
    ...baseDarkTheme,
    ...gray,
  },
})

const applyGlobalStyle = globalCss({
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap')",
  ],

  ':root': {
    '--rdp-cell-size': 40,
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

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    ':focus': {
      $$outlineShadowColor: '$colors$primary7',

      outline: 0,
      boxShadow: '0 0 0 2px $$outlineShadowColor',
    },
  },

  body: {
    backgroundColor: '$gray2',
    color: '$gray12',
    '-webkit-font-smoothing': 'antialiased',
    transition: 'background-color 0.150s',
  },

  'body, input, textarea, button': {
    fontFamily: '"Inter", sans-serif',
    fontWeight: 400,
  },

  'h6, h5, h4, h3, h2, h1, strong': {
    fontWeight: 600,
  },
})

applyGlobalStyle()

type Theme = 'light' | 'dark'
type Color =
  | 'tomato'
  | 'red'
  | 'crimson'
  | 'pink'
  | 'plum'
  | 'purple'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'grass'
  | 'orange'
  | 'brown'
  | 'sky'
  | 'mint'
  | 'lime'
  | 'yellow'
  | 'amber'
  | 'gray'

interface ThemeContextData {
  toggleTheme: () => void
  theme: Theme
  changeCurrentColor: (color: 'violet' | 'crimson') => void
  currentColor: Color
  resetTheme: () => void
}

const ThemeContext = createContext({} as ThemeContextData)

interface ThemeProviderProps {
  children: ReactNode
}

const availableThemes = {
  'tomato-light': tomatoLightTheme.className,
  'tomato-dark': tomatoDarkTheme.className,

  'red-light': redLightTheme.className,
  'red-dark': redDarkTheme.className,

  'crimson-light': crimsonLightTheme.className,
  'crimson-dark': crimsonDarkTheme.className,

  'pink-light': pinkLightTheme.className,
  'pink-dark': pinkDarkTheme.className,

  'plum-light': plumLightTheme.className,
  'plum-dark': plumDarkTheme.className,

  'purple-light': purpleLightTheme.className,
  'purple-dark': purpleDarkTheme.className,

  'violet-light': violetLightTheme.className,
  'violet-dark': violetDarkTheme.className,

  'indigo-light': indigoLightTheme.className,
  'indigo-dark': indigoDarkTheme.className,

  'blue-light': blueLightTheme.className,
  'blue-dark': blueDarkTheme.className,

  'cyan-light': cyanLightTheme.className,
  'cyan-dark': cyanDarkTheme.className,

  'teal-light': tealLightTheme.className,
  'teal-dark': tealDarkTheme.className,

  'green-light': greenLightTheme.className,
  'green-dark': greenDarkTheme.className,

  'grass-light': grassLightTheme.className,
  'grass-dark': grassDarkTheme.className,

  'orange-light': orangeLightTheme.className,
  'orange-dark': orangeDarkTheme.className,

  'brown-light': brownLightTheme.className,
  'brown-dark': brownDarkTheme.className,

  'sky-light': skyLightTheme.className,
  'sky-dark': skyDarkTheme.className,

  'mint-light': mintLightTheme.className,
  'mint-dark': mintDarkTheme.className,

  'lime-light': limeLightTheme.className,
  'lime-dark': limeDarkTheme.className,

  'yellow-light': yellowLightTheme.className,
  'yellow-dark': yellowDarkTheme.className,

  'amber-light': amberLightTheme.className,
  'amber-dark': amberDarkTheme.className,

  'gray-light': grayLightTheme.className,
  'gray-dark': grayDarkTheme.className,
}

function getMediaTheme() {
  const mql = matchMedia('(prefers-color-scheme: dark)')
  const hasMediaQueryPreference = typeof mql.matches === 'boolean'

  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light'
  }

  return 'light'
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const persistedTheme = localStorage.getItem('theme')

    if (persistedTheme) {
      return persistedTheme as Theme
    }

    const osTheme = getMediaTheme()

    if (osTheme) {
      return osTheme
    }

    return 'light'
  })
  const [currentColor, setCurrentColor] = useState<Color>(() => {
    const persistedColor = localStorage.getItem('color')

    if (persistedColor) {
      return persistedColor as Color
    }

    return 'violet'
  })

  const html = document.documentElement

  html.classList.add(availableThemes[`${currentColor}-${theme}`])

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'

    html.classList.remove(availableThemes[`${currentColor}-${theme}`])
    html.classList.add(availableThemes[`${currentColor}-${newTheme}`])

    localStorage.setItem('theme', newTheme)

    setTheme(newTheme)
  }

  function changeCurrentColor(color: 'violet' | 'crimson') {
    html.classList.remove(availableThemes[`${currentColor}-${theme}`])
    html.classList.add(availableThemes[`${color}-${theme}`])

    localStorage.setItem('color', color)

    setCurrentColor(color)
  }

  function resetTheme() {
    localStorage.removeItem('theme')

    const systemTheme = getMediaTheme()

    setTheme(systemTheme ?? 'light')
  }

  // window
  // .matchMedia("(prefers-color-scheme: dark)")
  // .addEventListener("change", (e) => {
  //   console.log(e.matches ? 'dark' : 'light');
  // });

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        theme,
        changeCurrentColor,
        currentColor,
        resetTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error('useTheme must be used within a ThemeProvider.')
  }

  return themeContext
}

export { ThemeProvider, styled, keyframes, useTheme }
export type { Theme, Color }
