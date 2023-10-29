import { type FC, type ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { type ReduxStoreWithReducerManager } from 'app/providers/StoreProvider'
import { type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { type Reducer } from '@reduxjs/toolkit'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
  children?: ReactNode
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props: DynamicModuleLoaderProps) => {
  const { children, reducers, removeAfterUnmount = false } = props

  const store = useStore() as ReduxStoreWithReducerManager
  const dispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
          store.reducerManager.remove(name, reducer)
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }
    // eslint-disable-next-line
  }, [])

  return (
      <>
        {children}
      </>
  )
}
