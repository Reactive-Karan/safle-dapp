import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from './Navbar'
import { RoutingConfig } from '../../consts/routeConsts'

jest.mock('../theme-toggle/ThemeToggle', () => () => <div>ThemeToggle</div>)
jest.mock('../wallet/Wallet', () => () => <div>Wallet</div>)

describe('Navbar component', () => {
  test('renders navbar elements', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )

    expect(screen.getByText('ThemeToggle')).toBeInTheDocument()
    expect(screen.getByText('Wallet')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  test('navigates to root on logo click', () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )

    const logo = container.querySelector('img')
    fireEvent.click(logo)

    expect(window.location.pathname).toBe(RoutingConfig.ROOT)
  })

  test('toggles overlay visibility', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )

    // Open the drawer
    const hamburger = screen.getByText('☰')
    fireEvent.click(hamburger)

    // Check for the drawer content
    expect(screen.getByText('Menu')).toBeInTheDocument()

    // Close the drawer
    const closeButton = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeButton)

    expect(screen.queryByText('Menu')).not.toBeInTheDocument()
  })
})
