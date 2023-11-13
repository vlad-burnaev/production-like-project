import { classNames } from 'shared/lib/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useEffect } from 'react'

const reducers: ReducersList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string
}
const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
          <div className={classNames('', {}, [className])}>
            <ProfileCard />
          </div>
        </DynamicModuleLoader>
  )
}

export default ProfilePage
