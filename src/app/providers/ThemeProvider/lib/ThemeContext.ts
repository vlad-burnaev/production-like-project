import { createContext } from 'react'

export enum Theme {
  Light = 'app_theme_light',
  Dark = 'app_theme_dark',
  Orange = 'app_theme_orange',
}

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
