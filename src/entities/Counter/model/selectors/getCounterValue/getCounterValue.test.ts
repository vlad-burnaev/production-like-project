import { getCounterValue } from 'entities/Counter'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'

describe('getCounterValue', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 42,
      },
    }
    expect(getCounterValue(state as StateSchema)).toEqual(42)
  })
})
