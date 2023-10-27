import { classNames } from 'shared/lib/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme, Input } from 'shared/ui'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginFormState } from '../../model/selectors/getLoginFormState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}
export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, error, isLoading } = useSelector(getLoginFormState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, password, username])

  return (
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Авторизация')} />
        {error && <Text text={error} theme={TextTheme.ERROR} />}
        {isLoading && <span>Loading...</span>}
        <Input
            onChange={onChangeUsername}
            type="text"
            className={cls.input}
            placeholder={t('Введите логин')}
            autoFocus={true}
            disabled={isLoading}
            value={username}
        />
        <Input
            onChange={onChangePassword}
            type="text"
            className={cls.input}
            placeholder={t('Введите пароль')}
            disabled={isLoading}
            value={password}
        />
        <Button
            theme={ButtonTheme.Outline}
            className={cls.loginBtn}
            onClick={onLoginClick}
            disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
  )
})
