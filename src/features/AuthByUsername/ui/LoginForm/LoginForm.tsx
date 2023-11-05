import { classNames } from 'shared/lib/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme, Input, Text, TextTheme } from 'shared/ui'
import { useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError'
import { getLoginUsername } from '../../model/selectors/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

export interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className, onSuccess } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [dispatch, onSuccess, password, username])

  return (
      <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
        <div className={classNames(cls.LoginForm, {}, [className])}>
          <Text title={t('Авторизация')}/>
          {error && <Text text={error} theme={TextTheme.ERROR}/>}
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
      </DynamicModuleLoader>
  )
})

export default LoginForm
