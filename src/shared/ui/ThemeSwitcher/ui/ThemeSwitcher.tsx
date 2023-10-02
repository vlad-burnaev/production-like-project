import { classNames } from 'shared/lib'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { Button, ButtonTheme } from 'shared/ui/Button'

interface ThemeSwitcherProps {
  className?: string
}
export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props

  const { theme, toggleTheme } = useTheme()

  return (
        <Button
            theme={ButtonTheme.Clear}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.Dark ? <DarkIcon /> : <LightIcon />}
        </Button>
  )
}
