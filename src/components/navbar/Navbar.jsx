import { Drawer, Flex } from 'antd'
import ThemeToggle from '../theme-toggle/ThemeToggle'
import Wallet from '../wallet/Wallet'
import { useNavigate } from 'react-router-dom'
import { RoutingConfig } from '../../consts/routeConsts'
import './Navbar.scss'
import { useState } from 'react'

const Navbar = () => {
  const navigate = useNavigate()
  const [isOverlayVisible, setOverlayVisible] = useState(false)

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible)
  }

  const onClose = () => {
    setOverlayVisible(false)
  }

  return (
    <>
      <Flex className="header" justify="space-between" align="center" gap={80}>
        <img
          src="https://safle.com/static/media/logo.1541eddb09985d4fd1866c3a72a73b55.svg"
          className="logo"
          onClick={() => navigate(RoutingConfig.ROOT)}
        />
        <Flex gap={20} className="desktop-controls">
          <Wallet />
          <ThemeToggle />
        </Flex>
        <div className="hamburger" onClick={toggleOverlay}>
          &#9776;
        </div>
      </Flex>

      {isOverlayVisible && (
        <Drawer
          title="Menu"
          placement={'top'}
          width={500}
          height={300}
          onClose={() => onClose()}
          open={isOverlayVisible}
          style={{ backgroundColor: 'black', color: 'white' }}
        >
          <Wallet />

          <ThemeToggle />
        </Drawer>
      )}
    </>
  )
}

export default Navbar
