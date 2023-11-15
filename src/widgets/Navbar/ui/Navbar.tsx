import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui'
import { classNames } from 'shared/lib'
import { memo, useState } from 'react'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

interface NavbarProps {
  className?: string
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const authData = useSelector(getUserAuthData)

  const [isAuthModal, setIsAuthModal] = useState(false)
  const onCloseAuthModal = () => {
    setIsAuthModal(false)
  }
  const onOpenAuthModal = () => {
    setIsAuthModal(true)
  }

  const onLogout = () => {
    dispatch(userActions.logout())
  }

  if (!authData) {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
          <div className={cls.links}>
            <Button
                onClick={onOpenAuthModal}
                theme={ButtonTheme.CLEAR_INVERTED}
            >
              {t('Войти')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseAuthModal}/>}
          </div>
        </div>
    )
  }

  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
          <Button
              onClick={onLogout}
              theme={ButtonTheme.CLEAR_INVERTED}
          >
            {t('Выйти')}
          </Button>
        </div>
      </div>
  )
})
