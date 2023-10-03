import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui'
import { classNames } from 'shared/lib'
import { useState } from 'react'
import { LoginModal } from 'features/AuthByUsername'

interface NavbarProps {
  className?: string
}
export const Navbar = (props: NavbarProps) => {
  const { className } = props
  const { t } = useTranslation()

  const [isAuthModal, setIsAuthModal] = useState(false)
  const onCloseAuthModal = () => {
    setIsAuthModal(false)
  }
  const onOpenAuthModal = () => {
    setIsAuthModal(true)
  }

  return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    onClick={onOpenAuthModal}
                    theme={ButtonTheme.ClearInverted}
                >
                  {t('Войти')}
                </Button>
                <LoginModal isOpen={isAuthModal} onClose={onCloseAuthModal} />
            </div>
        </div>
  )
}
