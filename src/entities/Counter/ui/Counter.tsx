import { Button } from 'shared/ui'
import { useDispatch, useSelector } from 'react-redux'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions } from '../model/slice/counterSlice'

export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)
  const increment = () => {
    dispatch(counterActions.increment())
  }
  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1 data-testid="counter-value">{counterValue}</h1>
      <Button onClick={increment} data-testid="increment-btn">+</Button>
      <Button onClick={decrement} data-testid="decrement-btn">-</Button>
    </div>
  )
}
