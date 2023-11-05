import { classNames } from 'shared/lib'
import './Loader.scss'
import { memo } from 'react'

interface LoaderProps {
  className?: string
}
export const Loader = memo((props: LoaderProps) => {
  const { className } = props

  return (
      <div className={classNames('lds-facebook', {}, [className])}>
        <div></div>
        <div></div>
        <div></div>
      </div>
  )
})
