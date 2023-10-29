import axios from 'axios'
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'

jest.mock('axios')
const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername', () => {
  test('success login', async () => {
    const userValue = { username: 'vlad-burn', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: 'vlad-burn', password: '123' })

    expect(mockedAxios.post).toBeCalled()
    expect(thunk.dispatch).toBeCalledWith(userActions.setAuthData(userValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toBe(userValue)
  })

  describe('failed login', () => {
    test('should return "no data" error then no data from API', async () => {
      mockedAxios.post.mockReturnValue(Promise.resolve({ status: 200 }))

      const thunk = new TestAsyncThunk(loginByUsername)
      const result = await thunk.callThunk({ username: 'vlad-burn', password: '123' })

      expect(mockedAxios.post).toBeCalled()
      expect(thunk.dispatch).toHaveBeenCalledTimes(3)
      expect(result.meta.requestStatus).toBe('rejected')
      expect(result.payload).toBe('no data')
    })

    test('should return error message then API error', async () => {
      const errorMessage = 'Ошибка авторизации'
      mockedAxios.post.mockReturnValue(Promise.reject(new Error(errorMessage)))

      const thunk = new TestAsyncThunk(loginByUsername)
      const result = await thunk.callThunk({ username: 'vlad-burn', password: '123' })

      expect(mockedAxios.post).toBeCalled()
      expect(thunk.dispatch).toHaveBeenCalledTimes(2)
      expect(result.meta.requestStatus).toBe('rejected')
      expect(result.payload).toBe(errorMessage)
    })
  })
})
