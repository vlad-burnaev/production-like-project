import { getCounter } from 'entities/Counter'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'

describe('getCounter', () => {
  test('should return counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 2,
      },
    }
    expect(getCounter(state as StateSchema)).toEqual({ value: 2 })
  })
})
