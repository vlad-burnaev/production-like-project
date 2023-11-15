import { classNames } from 'shared/lib/classNames'
import cls from './Avatar.module.scss'
import { type CSSProperties, useMemo } from 'react'

const DEFAULT_SIZE = 100

interface AvatarProps {
  className?: string
  src?: string
  alt?: string
  size?: number
}

export const Avatar = (props: AvatarProps) => {
  const { className, src, alt, size = DEFAULT_SIZE } = props
  const styles = useMemo<CSSProperties>(() => {
    return {
      height: size,
      width: size,
    }
  }, [size])

  return (
      <img
          src={src}
          alt={alt}
          style={styles}
          className={classNames(cls.Avatar, {}, [className])}
      />
  )
}
