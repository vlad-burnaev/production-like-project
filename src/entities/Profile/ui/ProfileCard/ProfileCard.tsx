import { classNames } from 'shared/lib/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Avatar, Input, Text, TextAlign, TextTheme } from 'shared/ui'
import { type Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader'
import { type Mods } from 'shared/lib/classNames/classNames'
import { type Currency, CurrencySelect } from 'entities/Currency'
import { type Country } from 'entities/Country/model/types/country'
import { CountrySelect } from 'entities/Country'

interface ProfileCardProps {
  data?: Profile
  isLoading?: boolean
  error?: string
  className?: string
  readonly?: boolean
  onChangeFirstname?: (value: string) => void
  onChangeLastname?: (value: string) => void
  onChangeUsername?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeCity?: (value: string) => void
  onChangeCurrency?: (value: Currency) => void
  onChangeCountry?: (value: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeUsername,
    onChangeAge,
    onChangeCity,
    onChangeCurrency,
    onChangeCountry,
  } = props
  const { t } = useTranslation('profile')

  if (isLoading) {
    return (
        <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
          <Loader />
        </div>
    )
  }

  if (error) {
    return (
        <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
          <Text
              theme={TextTheme.ERROR}
              align={TextAlign.CENTER}
              title={t('Произошла ошибка при загрузке профиля')}
              text={t('Попробуйте перезагрузить страницу')}
          />
        </div>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  }

  return (
      <div className={classNames(cls.ProfileCard, mods, [className])}>
        <div>
          {data?.avatar && (
              <div className={cls.avatarWrapper}>
                <Avatar src={data.avatar} />
              </div>
          ) }
          <Input
              value={data?.username}
              placeholder={t('Ваше имя пользователя')}
              className={cls.input}
              readonly={readonly}
              onChange={onChangeUsername}
          />
          <Input
              value={data?.firstname}
              placeholder={t('Ваше имя')}
              className={cls.input}
              readonly={readonly}
              onChange={onChangeFirstname}
          />
          <Input
              value={data?.lastname}
              placeholder={t('Ваша фамилия')}
              className={cls.input}
              readonly={readonly}
              onChange={onChangeLastname}
          />
          <Input
              value={data?.age}
              placeholder={t('Ваш возраст')}
              className={cls.input}
              readonly={readonly}
              onChange={onChangeAge}
          />
          <Input
              value={data?.city}
              placeholder={t('Ваш город')}
              className={cls.input}
              readonly={readonly}
              onChange={onChangeCity}
          />
          <CurrencySelect
              className={cls.input}
              onChange={onChangeCurrency}
              initialCurrency={data?.currency}
              readonly={readonly}
          />
          <CountrySelect
              className={cls.input}
              onChange={onChangeCountry}
              initialCounty={data?.country}
              readonly={readonly}
          />
        </div>
      </div>
  )
}
