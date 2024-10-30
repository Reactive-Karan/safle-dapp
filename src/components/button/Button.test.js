import React, { act } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button component', () => {
  test('renders with default props', () => {
    act(() => {
      render(<Button>Click me</Button>)
    })
    const button = screen.getByText(/click me/i)
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('primary-btn')
    expect(button).toHaveStyle('font-size: 16px')
  })

  test('renders with secondary variant', () => {
    act(() => {
      render(<Button variant="secondary">Click me</Button>)
    })
    const button = screen.getByText(/click me/i)
    expect(button).toHaveClass('secondary-btn')
  })

  test('applies custom size', () => {
    act(() => {
      render(<Button size={20}>Click me</Button>)
    })
    const button = screen.getByText(/click me/i)
    expect(button).toHaveStyle('font-size: 20px')
  })

  test('calls onClick function when clicked', () => {
    const handleClick = jest.fn()
    act(() => {
      render(<Button onClick={handleClick}>Click me</Button>)
    })
    const button = screen.getByText(/click me/i)

    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('renders children correctly', () => {
    act(() => {
      render(<Button>Test Button</Button>)
    })
    const button = screen.getByText(/test button/i)
    expect(button).toBeInTheDocument()
  })

  test('supports additional props', () => {
    act(() => {
      render(<Button data-testid="custom-button">Click me</Button>)
    })
    const button = screen.getByTestId('custom-button')
    expect(button).toBeInTheDocument()
  })
})
