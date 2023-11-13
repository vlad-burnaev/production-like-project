import { classNames } from 'shared/lib/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Button, ButtonTheme, Input, Text } from 'shared/ui'
import { PageLoader } from 'widgets/PageLoader'
import { getProfileData, getProfileError, getProfileIsLoading } from 'entities/Profile'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className } = props
  const { t } = useTranslation('profile')
  const data = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)

  if (isLoading) {
    return <PageLoader />
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
      <div className={classNames(cls.ProfileCard, {}, [className])}>
        <div className={cls.header}>
          <Text title={t('Профиль')}/>
          <Button theme={ButtonTheme.Outline} className={cls.editBtn}>
            {t('Редактировать')}
          </Button>
        </div>
        <div className={cls.data}>
          <Input value={data?.firstname} placeholder={t('Ваше имя')} className={cls.input}/>
          <Input value={data?.lastname} placeholder={t('Ваша фамилия')} className={cls.input}/>
        </div>
      </div>
  )
}
