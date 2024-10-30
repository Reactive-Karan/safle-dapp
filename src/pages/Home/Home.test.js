import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { useEthers } from '@usedapp/core'
import Home from './Home'
import { MemoryRouter } from 'react-router-dom'
import WalletModal from '../../components/wallet-connect-modal/WalletModal'

jest.mock('@usedapp/core', () => ({
  useEthers: jest.fn()
}))

jest.mock('../../components/wallet-connect-modal/WalletModal', () => {
  return jest.fn(({ open, onClose }) => (
    <div>
      {open && <div role="dialog">Wallet Modal</div>}
      <button onClick={onClose}>Close</button>
    </div>
  ))
})

jest.mock('../../components/button', () => ({ children, ...props }) => (
  <button {...props}>{children}</button>
))

describe('Home component', () => {
  const mockNavigate = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('renders the Home component', () => {
    useEthers.mockReturnValue({ account: null, library: null })

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    expect(screen.getByText(/Digital Collection/i)).toBeInTheDocument()
    expect(screen.getByText(/Discover Games/i)).toBeInTheDocument()
    expect(screen.getByText(/Create NFT/i)).toBeInTheDocument()
  })

  test('opens wallet modal when Discover Games is clicked without account', () => {
    useEthers.mockReturnValue({ account: null, library: null })

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    const discoverButton = screen.getByText(/Discover Games/i)
    fireEvent.click(discoverButton)
  })

  test('navigates to games when Discover Games is clicked with account', () => {
    useEthers.mockReturnValue({
      account: '0x1234567890abcdef',
      library: {}
    })

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    const discoverButton = screen.getByText(/Discover Games/i)
    fireEvent.click(discoverButton)
  })

  test('closes wallet modal when close button is clicked', () => {
    useEthers.mockReturnValue({ account: null, library: null })

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    const discoverButton = screen.getByText(/Discover Games/i)
    fireEvent.click(discoverButton)
  })
})
