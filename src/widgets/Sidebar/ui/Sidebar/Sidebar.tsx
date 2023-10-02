import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { classNames } from 'shared/lib'
import { AppLink, Button, LangSwitcher, ThemeSwitcher } from 'shared/ui'
import { ButtonTheme } from 'shared/ui/Button'
import { ButtonSize } from 'shared/ui/Button/ui/Button'
import { AppLinkTheme } from 'shared/ui/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfg'
import { useTranslation } from 'react-i18next'

import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'

interface SidebarProps {
  className?: string
}
export const Sidebar = (props: SidebarProps) => {
  const { className } = props
  const { t } = useTranslation()

  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => { setCollapsed(prev => !prev) }

  return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.links}>
              <AppLink
                  theme={AppLinkTheme.Secondary}
                  to={RoutePath.main}
                  className={cls.link}
              >
                <MainIcon className={cls.icon} />
                <span className={cls.text}>{t('Главная')}</span>
              </AppLink>
              <AppLink
                  theme={AppLinkTheme.Secondary}
                  to={RoutePath.about}
                  className={cls.link}
              >
                <AboutIcon className={cls.icon} />
                <span className={cls.text}>{t('О Сайте')}</span>
                </AppLink>
            </div>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BackgroundInverted}
                size={ButtonSize.L}
                square
            >
              {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </aside>
  )
}
