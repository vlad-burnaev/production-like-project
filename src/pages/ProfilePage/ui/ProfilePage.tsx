import { classNames } from 'shared/lib/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { type Currency } from 'entities/Currency'
import { type Country } from 'entities/Country'

const reducers: ReducersList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string
}
const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()

  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateData({ firstname: value || '' }))
  }, [dispatch])

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateData({ lastname: value || '' }))
  }, [dispatch])

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateData({ age: Number(value) || 0 }))
  }, [dispatch])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateData({ city: value || '' }))
  }, [dispatch])

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateData({ username: value || '' }))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateData({ currency }))
  }, [dispatch])

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateData({ country }))
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
          <div className={classNames('', {}, [className])}>
            <ProfilePageHeader />
            <ProfileCard
                isLoading={isLoading}
                data={formData}
                error={error}
                readonly={readonly}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeUsername={onChangeUsername}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
          </div>
        </DynamicModuleLoader>
  )
}

export default ProfilePage
