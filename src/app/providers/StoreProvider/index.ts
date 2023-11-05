import { StoreProvider } from './ui/StoreProvider'
import { createReduxStore, type AppDispatch } from './config/store'
import { type StateSchema, type ReduxStoreWithReducerManager } from '../StoreProvider/config/StateSchema'

export {
  StoreProvider,
  createReduxStore,
  type AppDispatch,
  type StateSchema,
  type ReduxStoreWithReducerManager,
}
