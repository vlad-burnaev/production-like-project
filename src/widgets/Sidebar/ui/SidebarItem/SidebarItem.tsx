import cls from './SidebarItem.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui'
import { type SidebarItemType } from '../../model/items'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { classNames } from 'shared/lib'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}
export const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, collapsed } = props
  const { t } = useTranslation()
  const authData = useSelector(getUserAuthData)

  if (item.authOnly && !authData) {
    return null
  }

  return (
      <AppLink
          theme={AppLinkTheme.Secondary}
          to={item.path}
          className={classNames(cls.link, { [cls.collapsed]: collapsed }, [])}
      >
        <item.Icon className={cls.icon} />
        <span className={cls.text}>{t(item.text)}</span>
      </AppLink>
  )
})
