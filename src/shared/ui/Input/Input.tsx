import { classNames } from 'shared/lib/classNames'
import cls from './Input.module.scss'
import { type ChangeEvent, type InputHTMLAttributes, memo, useState, useEffect, useRef } from 'react'
import { type Mods } from 'shared/lib/classNames/classNames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  readonly?: boolean
}
export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    readonly,
    children,
    ...otherProps
  } = props

  const [focused, setFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)
  const ref = useRef<HTMLInputElement>(null)
  const isCaretVisible = focused && !readonly

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  useEffect(() => {
    if (autoFocus) {
      setFocused(true)
      ref.current?.focus()
    }
  }, [autoFocus])

  const onFocus = () => {
    setFocused(true)
  }
  const onBlur = () => {
    setFocused(false)
  }

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart)
  }

  const mods: Mods = {
    [cls.readonly]: readonly,
  }

  return (
      <div className={classNames(cls.InputWrapper, mods, [className])}>
        {placeholder && <div className={cls.placeholder}>
          {`${placeholder} >`}
        </div>}
        <div className={cls.caretWrapper}>
          <input
              ref={ref}
              value={value}
              onChange={onChangeHandler}
              type={type}
              onBlur={onBlur}
              onFocus={onFocus}
              onSelect={onSelect}
              readOnly={readonly}
              className={cls.input}
              {...otherProps}
          />
          {isCaretVisible && (
              <span
                  className={cls.caret}
                  style={{ left: `${caretPosition * 7}px` }}
              />
          )}
        </div>
      </div>
  )
})
