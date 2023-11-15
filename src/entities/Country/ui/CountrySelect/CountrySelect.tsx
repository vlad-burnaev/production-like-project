import { Select } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { Country } from '../../model/types/country'

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Armenia, content: Country.Armenia },
]

interface CountrySelectProps {
  className?: string
  initialCounty?: Country
  onChange?: (country: Country) => void
  readonly?: boolean
}

export const CountrySelect = (props: CountrySelectProps) => {
  const { onChange, initialCounty, readonly, className } = props
  const { t } = useTranslation()

  return <Select
      className={className}
      label={t('Страна')}
      options={options}
      onChange={onChange}
      value={initialCounty}
      readonly={readonly}
  />
}
