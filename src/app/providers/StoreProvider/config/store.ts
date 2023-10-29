import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type ReduxStoreWithReducerManager, type StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager'

interface CreateReduxStoreProps {
  initialState?: StateSchema
  asyncReducers?: ReducersMapObject<StateSchema>
}

export function createReduxStore (props: CreateReduxStoreProps) {
  const { initialState, asyncReducers } = props

  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store: ReduxStoreWithReducerManager = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })

  store.reducerManager = reducerManager

  return store
}
