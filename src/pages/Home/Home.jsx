import { Flex } from 'antd'
import { Typewriter } from 'react-simple-typewriter'
import './Home.scss'
import Button from '../../components/button'
import { AppstoreAddOutlined, GlobalOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { RoutingConfig } from '../../consts/routeConsts'
import WalletModal from '../../components/wallet-connect-modal/WalletModal'
import { useState } from 'react'
import { useEthers } from '@usedapp/core'

const Home = () => {
  const navigate = useNavigate()
  const { account, library } = useEthers()
  const [walletModal, setWalletModal] = useState(false)

  const closeWalletModal = () => {
    setWalletModal(false)
  }

  const handleDiscoverMore = () => {
    if (account && library) {
      navigate(RoutingConfig.GAMES)
    } else {
      setWalletModal(true)
    }
  }
  return (
    <Flex justify={'space-around'} align="center" className="banner-container" wrap="wrap">
      <Flex justify="center" vertical align="left" gap={36} className="banner-text-wrapper">
        <p className="banner-text-heading">
          Digital Collection <br /> <span className="banner-nft-text">& </span>
          <Typewriter words={['Buy', 'Sell']} loop /> <span className="banner-nft-text">NFTs</span>
          <br />
          on Marketplace
        </p>

        <div>
          <Button variant="primary" onClick={() => handleDiscoverMore()}>
            <GlobalOutlined /> Discover Games
          </Button>
          <Button variant="secondary">
            <AppstoreAddOutlined /> Create NFT
          </Button>
        </div>
        <div></div>
      </Flex>

      {/* Banner image */}
      <div>
        <div className="banner-image">
          <img
            src="https://www.themelooks.biz/demo/anefty/html/preview/assets/img/media/banner-img.png"
            alt="banner"
          />
        </div>
      </div>

      <WalletModal open={walletModal} onClose={closeWalletModal} />
    </Flex>
  )
}

export default Home
