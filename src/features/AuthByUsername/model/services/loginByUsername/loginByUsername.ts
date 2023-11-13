import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage'
import i18n from 'i18next'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { AxiosError } from 'axios'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI
    try {
      const response = await extra.api.post<User>('/login', authData)

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      dispatch(userActions.setAuthData(response.data))
      extra.navigate?.('/profile')

      if (!response.data) {
        throw new Error('no data')
      }

      return response.data
    } catch (e) {
      if (e instanceof AxiosError) {
        return rejectWithValue(i18n.t('Произошла непредвиденная ошибка'))
      }

      // @ts-expect-error
      return rejectWithValue(e.message)
    }
  },
)
