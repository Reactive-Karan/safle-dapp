import Navbar from '../components/navbar/Navbar'
import { useTheme } from '../contexts/ThemeProvider'

const MainLayout = ({ children }) => {
  const { isDarkMode } = useTheme()
  return (
    <div className="main-layout">
      <Navbar className={isDarkMode ? 'dark' : ''} />
      <main className="main-content-wrapper">{children}</main>
    </div>
  )
}

export default MainLayout
