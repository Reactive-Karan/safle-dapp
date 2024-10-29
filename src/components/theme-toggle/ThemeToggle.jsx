import { SunOutlined, MoonOutlined } from '@ant-design/icons'
import { useTheme } from '../../contexts/ThemeProvider'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <div className="theme-toggle-btn" onClick={toggleTheme}>
      <SunOutlined
        style={{ display: isDarkMode ? 'none' : 'block', fontSize: '24px', color: '#ffec40' }}
      />
      <MoonOutlined
        style={{ display: isDarkMode ? 'block' : 'none', fontSize: '24px', color: '#fff' }}
      />
    </div>
  )
}

export default ThemeToggle
