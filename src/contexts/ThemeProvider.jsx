import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

// eslint-disable-next-line
export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true) // default dark mode

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode)
    document.body.classList.toggle('dark-mode', !isDarkMode)
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
  )
}
