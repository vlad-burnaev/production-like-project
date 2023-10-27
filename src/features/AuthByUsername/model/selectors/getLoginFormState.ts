import { type StateSchema } from 'app/providers/StoreProvider'

export const getLoginFormState = (state: StateSchema) => {
  return state.loginForm
}
