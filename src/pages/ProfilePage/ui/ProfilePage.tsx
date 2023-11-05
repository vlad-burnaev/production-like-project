import { classNames } from 'shared/lib/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'
import { useTranslation } from 'react-i18next'

const reducers: ReducersList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string
}
const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
          <div className={classNames('', {}, [className])}>
            {t('Профиль')}
          </div>
        </DynamicModuleLoader>
  )
}

export default ProfilePage
