import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
  Primary = 'primary',
  Secondary = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}
export const AppLink: FC<AppLinkProps> = (props) => {
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
}
