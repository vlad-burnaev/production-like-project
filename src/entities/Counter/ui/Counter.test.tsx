import { fireEvent, screen } from '@testing-library/react'
import { Counter } from 'entities/Counter'
import { componentRender } from 'shared/lib/tests/componentRender'

describe('Counter', () => {
  test('render', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 42,
        },
      },
    })
    expect(screen.getByTestId('counter-value')).toHaveTextContent('42')
    expect(screen.getByTestId('increment-btn')).toBeInTheDocument()
    expect(screen.getByTestId('decrement-btn')).toBeInTheDocument()
  })

  test('increment', () => {
    const initialState = {
      counter: {
        value: 42,
      },
    }
    componentRender(<Counter />, {
      initialState,
    })
    fireEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('counter-value')).toHaveTextContent('43')
  })
  test('decrement', () => {
    const initialState = {
      counter: {
        value: 42,
      },
    }
    componentRender(<Counter />, {
      initialState,
    })
    fireEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('counter-value')).toHaveTextContent('41')
  })
})
