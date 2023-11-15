import cls from './Sidebar.module.scss'
import { memo, useState } from 'react'
import { classNames } from 'shared/lib'
import { Button, LangSwitcher, ThemeSwitcher } from 'shared/ui'
import { ButtonTheme } from 'shared/ui/Button'
import { ButtonSize } from 'shared/ui/Button/ui/Button'
import { SidebarItemsList } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
  className?: string
}
export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props

  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => { setCollapsed(prev => !prev) }

  return (
      <aside
          data-testid="sidebar"
          className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
      >
        <div className={cls.links}>
          {SidebarItemsList.map(item => (
              <SidebarItem item={item} key={item.text} collapsed={collapsed} />
          ))}
        </div>
        <Button
            data-testid="sidebar-toggle"
            onClick={onToggle}
            className={cls.collapseBtn}
            theme={ButtonTheme.BACKGROUND_INVERTED}
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
})
