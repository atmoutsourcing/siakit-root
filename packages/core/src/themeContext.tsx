import { createContext, ReactNode, useContext, useState } from 'react'

import { applyGlobalCss } from './global'
import { createTheme } from './styles'
import { amber } from './themes/amber'
import { baseDarkTheme, baseLightTheme } from './themes/base'
import { blue } from './themes/blue'
import { brown } from './themes/brown'
import { crimson } from './themes/crimson'
import { cyan } from './themes/cyan'
import { grass } from './themes/grass'
import { gray } from './themes/gray'
import { green } from './themes/green'
import {
  indigoLightTheme as indigoLight,
  indigoDarkTheme as indigoDark,
} from './themes/indigo'
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

export const colors = {
  orange: 'Laranja',
  tomato: 'Tomate',
  red: 'Vermelho',
  crimson: 'Crimson',
  pink: 'Rosa',
  plum: 'Plum',
  purple: 'Roxo',
  violet: 'Violeta',
  indigo: 'Índigo',
  blue: 'Azul',
  cyan: 'Ciano',
  teal: 'Teal',
  green: 'Verde',
  grass: 'Grama',
  brown: 'Marrom',

  sky: 'Céu',
  mint: 'Menta',
  lime: 'Verde lima',
  yellow: 'Amarelo',
  amber: 'Âmbar',
  gray: 'Cinza',
}

export type Theme = 'light' | 'dark'
export type Color = keyof typeof colors

type ThemeContextData = {
  theme: Theme
  togggleTheme: (value?: Theme) => void
  color: Color
  changeColor: (value: Color) => void
}

const ThemeContext = createContext({} as ThemeContextData)

applyGlobalCss()

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
    ...indigoLight,
  },
})
const indigoDarkTheme = createTheme({
  colors: {
    ...baseDarkTheme,
    ...indigoDark,
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

type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const persistedTheme = localStorage.getItem('@siakit:theme')

    if (persistedTheme) {
      return persistedTheme as Theme
    }

    localStorage.setItem('@siakit:theme', 'light')

    return 'light'
  })
  const [color, setColor] = useState<Color>(() => {
    const persistedColor = localStorage.getItem('@siakit:color')

    if (persistedColor) {
      return persistedColor as Color
    }

    localStorage.setItem('@siakit:color', 'indigo')

    return 'indigo'
  })

  const html = document.documentElement

  // html.classList.add(availableThemes[`${color}-${theme}`])

  function togggleTheme(value?: Theme) {
    const newTheme = value || (theme === 'light' ? 'dark' : 'light')

    html.classList.remove(availableThemes[`${color}-${theme}`])
    html.classList.add(availableThemes[`${color}-${newTheme}`])

    localStorage.setItem('@siakit:theme', newTheme)

    setTheme(newTheme)
  }

  function changeColor(value: Color) {
    html.classList.remove(availableThemes[`${color}-${theme}`])
    html.classList.add(availableThemes[`${value}-${theme}`])

    localStorage.setItem('@siakit:color', value)

    setColor(value)
  }

  return (
    <ThemeContext.Provider value={{ theme, togggleTheme, color, changeColor }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error('useTheme must be used within a ThemeProvider.')
  }

  return themeContext
}
