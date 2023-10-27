import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User, userActions } from 'entities/User'
import axios, { AxiosError } from 'axios'
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage'
import i18n from 'i18next'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData)

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      thunkApi.dispatch(userActions.setAuthData(response.data))

      if (!response.data) {
        throw new Error('no data')
      }

      return response.data
    } catch (e) {
      if (e instanceof AxiosError) {
        return thunkApi.rejectWithValue(i18n.t('Произошла непредвиденная ошибка'))
      }

      return thunkApi.rejectWithValue(e.message)
    }
  },
)
