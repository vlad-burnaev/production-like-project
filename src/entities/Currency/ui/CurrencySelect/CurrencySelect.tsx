import { Select } from 'shared/ui'
import { Currency } from 'entities/Currency'
import { useTranslation } from 'react-i18next'

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
]

interface CurrencySelectProps {
  className?: string
  initialCurrency?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

export const CurrencySelect = (props: CurrencySelectProps) => {
  const { onChange, initialCurrency, readonly, className } = props
  const { t } = useTranslation()

  return <Select
      className={className}
      label={t('Валюта')}
      options={options}
      onChange={onChange}
      value={initialCurrency}
      readonly={readonly}
  />
}
