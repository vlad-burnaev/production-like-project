import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme, Modal, AppLink, AppLinkTheme } from 'shared/ui'
import { classNames } from 'shared/lib'
import { useState } from 'react'

interface NavbarProps {
  className?: string
}
export const Navbar = (props: NavbarProps) => {
  const { className } = props
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const onToggleModal = () => {
    setIsAuthModal(!isAuthModal)
  }

  return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    onClick={onToggleModal}
                    theme={ButtonTheme.ClearInverted}
                >
                  {t('Войти')}
                </Button>
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                  {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, ratione.')}
                </Modal>
                <AppLink theme={AppLinkTheme.Secondary} to={'/'} className={cls.mainLink}>{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.Secondary} to={'/about'}>{t('О Сайте')}</AppLink>
            </div>
        </div>
  )
}
