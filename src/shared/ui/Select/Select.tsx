import { classNames } from 'shared/lib/classNames'
import cls from './Select.module.scss'
import { type ChangeEvent, memo, useMemo } from 'react'

interface SelectOption {
  value: any
  content: string | number | null
}

interface SelectProps {
  className?: string
  label?: string
  name?: string
  id?: string
  options: SelectOption[]
  value?: any
  onChange?: (value: any) => void
  readonly?: boolean
}

export const Select = memo(
  (props: SelectProps) => {
    const {
      className,
      label,
      name,
      id,
      options,
      value,
      readonly,
      onChange,
    } = props

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value)
    }

    const optionsList = useMemo(() => {
      return options.map(({ value, content }) => {
        return <option className={cls.option} key={value} value={value}>{content}</option>
      })
    }, [options])

    return (
          <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && (
                <span className={cls.label}>{`${label} >`}</span>
            )}
            <select
                className={cls.select}
                name={name}
                id={id}
                onChange={onChangeHandler}
                value={value}
                disabled={readonly}
            >
              {optionsList}
            </select>
          </div>
    )
  },
)
