import { useTranslation } from 'react-i18next'
import { Counter } from 'entities/Counter'
import { Input } from 'shared/ui'
import { useState } from 'react'

const MainPage = () => {
  const { t } = useTranslation('main')
  const [value, setValue] = useState('')

  const onChange = (value: string) => {
    setValue(value)
  }

  return (
        <div>
            {t('Главная страница')}
            <Counter />
            <Input
              value={value}
              onChange={onChange}
              placeholder={'Введите значение'}
            />
        </div>
  )
}

export default MainPage
