import { classNames } from 'shared/lib/classNames'
import cls from './Input.module.scss'
import { type ChangeEvent, type InputHTMLAttributes, memo, useState, useEffect, useRef } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
}
export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...otherProps
  } = props

  const [focused, setFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)
  const ref = useRef<HTMLInputElement>(null)

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

  return (
      <div className={classNames(cls.InputWrapper, {}, [className])}>
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
              className={cls.input}
              {...otherProps}
          />
          {focused && (
              <span
                  className={cls.caret}
                  style={{ left: `${caretPosition * 7}px` }}
              />
          )}
        </div>
      </div>
  )
})
