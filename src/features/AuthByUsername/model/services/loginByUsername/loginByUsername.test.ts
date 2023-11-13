import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'

describe('loginByUsername', () => {
  test('success login', async () => {
    const userValue = { username: 'vlad-burn', id: '1' }

    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))
    const result = await thunk.callThunk({ username: 'vlad-burn', password: '123' })

    expect(thunk.api.post).toBeCalled()
    expect(thunk.dispatch).toBeCalledWith(userActions.setAuthData(userValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toBe(userValue)
  })

  describe('failed login', () => {
    test('should return "no data" error then no data from API', async () => {
      const thunk = new TestAsyncThunk(loginByUsername)
      thunk.api.post.mockReturnValue(Promise.resolve({ status: 200 }))
      const result = await thunk.callThunk({ username: 'vlad-burn', password: '123' })

      expect(thunk.api.post).toBeCalled()
      expect(thunk.dispatch).toHaveBeenCalledTimes(3)
      expect(result.meta.requestStatus).toBe('rejected')
      expect(result.payload).toBe('no data')
    })

    test('should return error message then API error', async () => {
      const errorMessage = 'Ошибка авторизации'

      const thunk = new TestAsyncThunk(loginByUsername)
      thunk.api.post.mockReturnValue(Promise.reject(new Error(errorMessage)))
      const result = await thunk.callThunk({ username: 'vlad-burn', password: '123' })

      expect(thunk.api.post).toBeCalled()
      expect(thunk.dispatch).toHaveBeenCalledTimes(2)
      expect(result.meta.requestStatus).toBe('rejected')
      expect(result.payload).toBe(errorMessage)
    })
  })
})
