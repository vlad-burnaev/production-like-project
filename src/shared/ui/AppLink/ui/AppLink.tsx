import { classNames } from 'shared/lib'
import cls from './AppLink.module.scss'
import { memo, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
  Primary = 'primary',
  Secondary = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
  children?: ReactNode
}
export const AppLink = memo((props: AppLinkProps) => {
  const { className, children, to, theme = AppLinkTheme.Primary, ...otherProps } = props

  return (
      <Link
          to={to}
          className={classNames(cls.AppLink, {}, [className, cls[theme]])}
          {...otherProps}
      >
        {children}
      </Link>
  )
})
