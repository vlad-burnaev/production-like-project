import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'
import { useContext } from 'react'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export function useTheme (): UseThemeResult {
  const { theme = Theme.Light, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    let newTheme: Theme
    switch (theme) {
      case Theme.Dark:
        newTheme = Theme.Light
        break
      case Theme.Light:
        newTheme = Theme.Orange
        break
      case Theme.Orange:
      default:
        newTheme = Theme.Dark
    }
    setTheme?.(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  document.body.className = theme

  return {
    theme,
    toggleTheme,
  }
}
