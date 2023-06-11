import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { classNames } from 'shared/lib/classNames'
import { LangSwitcher, ThemeSwitcher } from 'shared/ui'

interface SidebarProps {
  className?: string
}
export const Sidebar = (props: SidebarProps) => {
  const { className } = props

  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => { setCollapsed(prev => !prev) }

  return (
        <aside className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>Toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </aside>
  )
}
