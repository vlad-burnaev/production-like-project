import { classNames } from 'shared/lib'
import cls from './PageLoader.module.scss'
import { Loader } from 'shared/ui/Loader'
import { memo } from 'react'

interface PageLoaderProps {
  className?: string
}
export const PageLoader = memo((props: PageLoaderProps) => {
  const { className } = props

  return (
      <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
      </div>
  )
})
