import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'
import { useContext } from 'react'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export function useTheme (): UseThemeResult {
  const { theme = Theme.Light, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light
    setTheme?.(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  document.body.className = theme

  return {
    theme,
    toggleTheme,
  }
}
