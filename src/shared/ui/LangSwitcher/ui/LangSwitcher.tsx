import { classNames } from 'shared/lib/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button'

interface LangSwitcherProps {
  className?: string
}
export const LangSwitcher = (props: LangSwitcherProps) => {
  const { className } = props

  const { t, i18n } = useTranslation()
  const toggle = async () => await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')

  return (
        <div >
            <Button
                theme={ThemeButton.Clear}
                onClick={toggle}
                className={classNames(cls.LangSwitcher, {}, [className])}
            >
                {t('Язык')}
            </Button>
        </div>
  )
}
