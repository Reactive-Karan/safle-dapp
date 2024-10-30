import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { useEthers } from '@usedapp/core'
import WalletModal from './WalletModal'
import { message } from 'antd'

jest.mock('@usedapp/core', () => ({
  useEthers: jest.fn()
}))

jest.mock('antd', () => ({
  message: {
    error: jest.fn()
  },
  Modal: ({ children, ...props }) => <div {...props}>{children}</div>
}))

describe('WalletModal component', () => {
  const mockActivateBrowserWallet = jest.fn()
  const mockOnClose = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    useEthers.mockReturnValue({
      activateBrowserWallet: mockActivateBrowserWallet
    })
  })

  test('renders modal with correct content', () => {
    render(<WalletModal open={true} onClose={mockOnClose} />)

    expect(screen.getByText(/connect your wallet/i)).toBeInTheDocument()
  })

  test('calls onClose when Close button is clicked', () => {
    render(<WalletModal open={true} onClose={mockOnClose} />)

    expect(mockOnClose).toHaveBeenCalledTimes(0)
  })

  test('calls connectWallet and activates wallet', () => {
    render(<WalletModal open={true} onClose={mockOnClose} />)

    expect(mockActivateBrowserWallet).toHaveBeenCalledTimes(0)
    expect(message.error).not.toHaveBeenCalled()
  })

  test('displays error message on connection failure', () => {
    mockActivateBrowserWallet.mockImplementation(() => {
      throw new Error('Connection failed')
    })

    render(<WalletModal open={true} onClose={mockOnClose} />)
  })
})
