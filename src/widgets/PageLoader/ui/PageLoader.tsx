import { classNames } from 'shared/lib'
import cls from './PageLoader.module.scss'
import { Loader } from 'shared/ui/Loader'

interface PageLoaderProps {
  className?: string
}
export const PageLoader = (props: PageLoaderProps) => {
  const { className } = props

  return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
          <Loader />
        </div>
  )
}
