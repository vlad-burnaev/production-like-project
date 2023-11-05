import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { memo } from 'react'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}
export const LangSwitcher = memo((props: LangSwitcherProps) => {
  const { className, short = false } = props

  const { t, i18n } = useTranslation()
  const toggle = async () => await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')

  return (
      <div >
        <Button
            theme={ButtonTheme.Clear}
            onClick={toggle}
            className={classNames('', {}, [className])}
        >
          {short ? t('Короткий язык') : t('Язык')}
        </Button>
      </div>
  )
})
