import HomePage from 'src/pages/index'
import { render, screen } from 'test-utils'

describe('<HomePage />', () => {
  it('renders correct text', () => {
    render(<HomePage />)

    expect(screen.getByText(/NextJS Boilerplate/)).toBeInTheDocument()
  })
})
