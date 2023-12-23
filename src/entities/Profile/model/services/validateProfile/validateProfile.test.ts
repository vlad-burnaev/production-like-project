import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { validateProfile } from './validateProfile'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'

const data = {
  username: 'vlad-burn',
  firstname: 'Vlad',
  lastname: 'Burnaev',
  age: 26,
  country: Country.Russia,
  city: 'Moscow',
  currency: Currency.RUB,
}

describe('validateProfile', () => {
  test('success', async () => {
    const result = validateProfile(data)

    expect(result).toEqual([])
  })

  test('without firstname and lastname', async () => {
    const result = validateProfile({ ...data, firstname: '', lastname: '' })

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })

  test('incorrect age', async () => {
    const result = validateProfile({ ...data, age: undefined })

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
  })

  test('incorrect country', async () => {
    const result = validateProfile({ ...data, country: undefined })

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
  })

  test('incorrect all', async () => {
    const result = validateProfile({
      ...data,
      country: undefined,
      age: undefined,
      firstname: '',
      lastname: '',
    })

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ])
  })
})
