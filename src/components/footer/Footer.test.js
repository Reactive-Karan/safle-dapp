import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer component', () => {
  test('renders correctly with the current year', () => {
    const currentYear = new Date().getFullYear()
    jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(currentYear)

    render(<Footer />)

    // Check if the footer is in the document
    const footer = screen.getByText(`© ${currentYear} Karan Mishra.`)
    expect(footer).toBeInTheDocument()

    // Cleanup mock
    Date.prototype.getFullYear.mockRestore()
  })
})
