import { profileActions, profileReducer, type ProfileSchema } from 'entities/Profile'

describe('profileSlice', () => {
  test('setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false }
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true),
    )).toEqual({ readonly: true })
  })
})
