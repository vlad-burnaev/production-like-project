import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from 'widgets'
import { renderWithTraslation } from 'shared/lib/tests/renderWithTraslation/renderWithTraslation'

describe('Sidebar', () => {
  test('render', () => {
    renderWithTraslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toggle', () => {
    renderWithTraslation(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
