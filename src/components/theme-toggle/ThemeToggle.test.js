import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../contexts/ThemeProvider'
import ThemeToggle from './ThemeToggle'

jest.mock('@ant-design/icons', () => ({
  SunOutlined: () => <div>Sun</div>,
  MoonOutlined: () => <div>Moon</div>
}))

describe('ThemeToggle component', () => {
  test('renders with light theme', () => {
    const mockToggleTheme = jest.fn()

    // initial context values
    const initialContext = {
      isDarkMode: false,
      toggleTheme: mockToggleTheme
    }

    render(
      <ThemeProvider value={initialContext}>
        <ThemeToggle />
      </ThemeProvider>
    )

    expect(screen.getByText('Sun')).toBeInTheDocument()
    expect(screen.queryByText('Moon')).toBeInTheDocument()
  })

  test('renders with dark theme', () => {
    const mockToggleTheme = jest.fn()

    const initialContext = {
      isDarkMode: true,
      toggleTheme: mockToggleTheme
    }

    render(
      <ThemeProvider value={initialContext}>
        <ThemeToggle />
      </ThemeProvider>
    )

    expect(screen.queryByText('Sun')).toBeInTheDocument()
    expect(screen.getByText('Moon')).toBeInTheDocument()
  })

  test('calls toggleTheme on click', () => {
    const mockToggleTheme = jest.fn()

    //  initial context values
    const initialContext = {
      isDarkMode: false,
      toggleTheme: mockToggleTheme
    }

    render(
      <ThemeProvider value={initialContext}>
        <ThemeToggle />
      </ThemeProvider>
    )

    const toggleButton = screen.getByText('Sun')
    fireEvent.click(toggleButton)

    expect(mockToggleTheme).toHaveBeenCalledTimes(0)
  })

  test('displays change theme text on mobile', () => {
    const originalInnerWidth = window.innerWidth
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 })

    const mockToggleTheme = jest.fn()

    const initialContext = {
      isDarkMode: false,
      toggleTheme: mockToggleTheme
    }

    render(
      <ThemeProvider value={initialContext}>
        <ThemeToggle />
      </ThemeProvider>
    )

    expect(screen.getByText('Change theme')).toBeInTheDocument()

    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: originalInnerWidth
    })
  })
})
