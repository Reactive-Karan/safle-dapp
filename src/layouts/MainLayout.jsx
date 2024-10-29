import Navbar from '../components/navbar/Navbar'
import { useTheme } from '../contexts/ThemeProvider'
import './MainLayout.scss'

const MainLayout = ({ children }) => {
  const { isDarkMode } = useTheme()
  return (
    <div className="main-layout">
      <Navbar className={isDarkMode ? 'dark' : ''} />
      <div className="main-content-wrapper">{children}</div>
    </div>
  )
}

export default MainLayout
