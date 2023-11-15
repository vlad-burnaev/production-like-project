import { classNames } from 'shared/lib'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, memo, type ReactNode } from 'react'
import { type Mods } from 'shared/lib/classNames/classNames'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear_inverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background_inverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
  children?: ReactNode
}
export const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme = ButtonTheme.OUTLINE,
    square = false,
    size = ButtonSize.M,
    disabled = false,
    children,
    ...otherProps
  } = props

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  }

  return (
      <button
          className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
          disabled={disabled}
          {...otherProps}
      >
        {children}
      </button>
  )
})
