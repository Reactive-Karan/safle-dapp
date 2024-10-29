import { Flex } from 'antd'
import ThemeToggle from '../theme-toggle/ThemeToggle'
import './Navbar.scss'
import Wallet from '../wallet/Wallet'

const Navbar = () => {
  return (
    <Flex className="header" justify="space-between" align="center">
      <img
        src="https://safle.com/static/media/logo.1541eddb09985d4fd1866c3a72a73b55.svg"
        className="logo"
      />
      <Flex gap={20}>
        {/* <span className="nav-link">Home</span> */}
        <Wallet className="nav-link" />
        <div className="navbar">
          <ThemeToggle />
        </div>
      </Flex>
    </Flex>
  )
}

export default Navbar
