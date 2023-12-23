import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { fetchProfileData } from 'entities/Profile'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

const data = {
  username: 'vlad-burn',
  firstname: 'Vlad',
  lastname: 'Burnaev',
  age: 26,
  country: Country.Russia,
  city: 'Moscow',
  currency: Currency.RUB,
}

describe('fetchProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data }))
    const result = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toBe(data)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
  })
})
