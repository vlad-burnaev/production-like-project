import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher, ThemeSwitcher } from 'shared/ui'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
  className?: string
}
export const Sidebar = (props: SidebarProps) => {
  const { className } = props
  const { t } = useTranslation()

  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => { setCollapsed(prev => !prev) }

  return (
        <aside data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button data-testid="sidebar-toggle" onClick={onToggle}>{t('Переключить')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </aside>
  )
}
