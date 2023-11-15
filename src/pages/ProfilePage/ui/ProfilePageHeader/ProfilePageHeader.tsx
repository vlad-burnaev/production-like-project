import { classNames } from 'shared/lib/classNames'
import cls from './ProfilePageHeader.module.scss'
import { Button, ButtonTheme, Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib'
import { useCallback } from 'react'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props
  const { t } = useTranslation()
  const readonly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
      <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
        <Text title={t('Профиль')}/>
        <div className={cls.controls}>
          {
            readonly
              ? (
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        className={cls.editBtn}
                        onClick={onEdit}
                    >
                      {t('Редактировать')}
                    </Button>)
              : (
                    <>
                      <Button
                          theme={ButtonTheme.OUTLINE_RED}
                          className={cls.saveBtn}
                          onClick={onSave}
                      >
                        {t('Сохранить')}
                      </Button>
                      <Button
                          theme={ButtonTheme.OUTLINE}
                          className={cls.cancelBtn}
                          onClick={onCancelEdit}
                      >
                        {t('Отменить')}
                      </Button>
                    </>
                )
          }
        </div>
      </div>
  )
}
