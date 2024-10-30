import { SunOutlined, MoonOutlined } from '@ant-design/icons'
import { useTheme } from '../../contexts/ThemeProvider'
import './ThemeToggle.scss'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  const isMobile = window.innerWidth < 768 // Simple mobile detection
  return (
    <div className="theme-toggle-btn" onClick={toggleTheme}>
      <SunOutlined
        style={{
          display: isDarkMode ? 'none' : 'block',
          fontSize: !isMobile && '24px',
          color: '#ffec40'
        }}
      />
      <MoonOutlined
        style={{
          display: isDarkMode ? 'block' : 'none',
          fontSize: !isMobile && '24px',
          color: '#fff'
        }}
      />
      {isMobile && <span>Change theme</span>}
    </div>
  )
}

export default ThemeToggle
