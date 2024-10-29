import React from 'react'
import { render, screen } from '@testing-library/react'
import PageNotFound from './PageNotFound'

describe('PageNotFound component', () => {
  test('renders 404 message', () => {
    render(<PageNotFound />)

    const heading = screen.getByText(/404 - Page Not Found/i)
    expect(heading).toBeInTheDocument()
  })

  test('renders with correct styles', () => {
    const { container } = render(<PageNotFound />)

    expect(container.firstChild).toHaveStyle('height: 90vh')
    expect(container.firstChild).toHaveStyle('display: flex')
    expect(container.firstChild).toHaveStyle('justify-content: center')
  })
})
