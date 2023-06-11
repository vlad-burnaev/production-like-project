import { classNames } from 'shared/lib/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}
export const Navbar = (props: NavbarProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.Secondary} to={'/'} className={cls.mainLink}>{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.Secondary} to={'/about'}>{t('О Сайте')}</AppLink>
            </div>
        </div>
  )
}
