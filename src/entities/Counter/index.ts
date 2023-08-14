import { counterSlice, counterActions, counterReducer } from './model/slice/counterSlice'
import { type CounterSchema } from './model/types/counterSchema'
import { Counter } from './ui/Counter'
import { getCounter } from './model/selectors/getCounter/getCounter'
import { getCounterValue } from './model/selectors/getCounterValue/getCounterValue'

export {
  counterSlice,
  counterReducer,
  counterActions,
  Counter,
  type CounterSchema,
  getCounter,
  getCounterValue,
}
