import { createContext, ReactNode, useContext, useState } from 'react'
import { applyGlobalCss } from './global'
import { createTheme } from './styles'
import { dark } from './themes/dark'
import { light } from './themes/light'

const scale = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
export const colors = {
  orange: 'orange',
  tomato: 'tomato',
  red: 'red',
  crimson: 'crimson',
  pink: 'pink',
  plum: 'plum',
  purple: 'purple',
  violet: 'violet',
  indigo: 'indigo',
  blue: 'blue',
  cyan: 'cyan',
  teal: 'teal',
  green: 'green',
  grass: 'grass',
  brown: 'brown',

  sky: 'sky',
  mint: 'mint',
  lime: 'lime',
  yellow: 'yellow',
  amber: 'amber',
  gray: 'gray',
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

const availableThemes = Object.keys(colors).reduce((acc, name) => {
  const primaryColors = {} as { [key: string]: string }

  scale.forEach((scaleItem) => {
    primaryColors[`primary${scaleItem}`] = `$${name}${scaleItem}`
  })

  const lightTheme = createTheme({
    colors: {
      ...light,
      ...primaryColors,
    },
  })

  const darkTheme = createTheme({
    colors: {
      ...dark,
      ...primaryColors,
    },
  })

  const themes = {
    ...acc,
    [`light-${name}`]: lightTheme.className,
    [`dark-${name}`]: darkTheme.className,
  }

  return themes
}, {}) as { [key: string]: string }

type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const persistedTheme = localStorage.getItem('@siakit:theme')

    if (persistedTheme) {
      return persistedTheme as Theme
    }

    return 'light'
  })
  const [color, setColor] = useState<Color>(() => {
    const persistedColor = localStorage.getItem('@siakit:color')

    if (persistedColor) {
      return persistedColor as Color
    }

    return 'indigo'
  })

  const html = document.documentElement

  html.classList.add(availableThemes[`${theme}-${color}`])

  function togggleTheme(value?: Theme) {
    const newTheme = value || (theme === 'light' ? 'dark' : 'light')

    html.classList.remove(availableThemes[`${theme}-${color}`])
    html.classList.add(availableThemes[`${newTheme}-${color}`])

    localStorage.setItem('@siakit:theme', newTheme)

    setTheme(newTheme)
  }

  function changeColor(value: Color) {
    html.classList.remove(availableThemes[`${theme}-${color}`])
    html.classList.add(availableThemes[`${theme}-${value}`])

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
