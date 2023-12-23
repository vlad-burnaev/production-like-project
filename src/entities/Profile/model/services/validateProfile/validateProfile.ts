import { type Profile } from 'entities/Profile'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'

export const validateProfile = (profile?: Profile): ValidateProfileError[] => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA]
  }

  const { firstname, lastname, age, country } = profile
  const errors = []

  if (!firstname || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA)
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE)
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY)
  }

  return errors
}
