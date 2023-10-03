import { classNames } from 'shared/lib/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, Input } from 'shared/ui'

interface LoginFormProps {
  className?: string
}
export const LoginForm = (props: LoginFormProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
        <form className={classNames(cls.LoginForm, {}, [className])}>
          <Input
              type="text"
              className={cls.input}
              placeholder={t('Введите логин')}
              autoFocus={true}
          />
          <Input
              type="text"
              className={cls.input}
              placeholder={t('Введите пароль')}
          />
          <Button className={cls.loginBtn}>
            {t('Войти')}
          </Button>
        </form>
  )
}
