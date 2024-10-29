import { Flex } from 'antd'
import ThemeToggle from '../theme-toggle/ThemeToggle'
import './Navbar.scss'
import Wallet from '../wallet/Wallet'
import { useNavigate } from 'react-router-dom'
import { RoutingConfig } from '../../consts/routeConsts'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Flex className="header" justify="space-between" align="center">
      <img
        src="https://safle.com/static/media/logo.1541eddb09985d4fd1866c3a72a73b55.svg"
        className="logo"
        onClick={() => navigate(RoutingConfig.ROOT)}
      />
      <Flex gap={20}>
        <Wallet />
        <ThemeToggle />
      </Flex>
    </Flex>
  )
}

export default Navbar
