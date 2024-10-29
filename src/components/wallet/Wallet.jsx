import { useState, useEffect } from 'react'
import { useEthers } from '@usedapp/core'
import { ethers } from 'ethers'
import { Flex, message, Tooltip } from 'antd'
import { DisconnectOutlined, UserOutlined } from '@ant-design/icons'
import './Wallet.scss'
import Button from '../button'
import { useNavigate } from 'react-router-dom'
import { RoutingConfig } from '../../consts/routeConsts'

const Wallet = () => {
  const { activateBrowserWallet, deactivate, account, library } = useEthers()
  const [balance, setBalance] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (account && library) {
      library.getBalance(account).then((bal) => {
        setBalance(ethers.utils.formatEther(bal))
        navigate(RoutingConfig.GAMES)
      })
    }
    //eslint-disable-next-line
  }, [account, library])

  const connectWallet = () => {
    try {
      activateBrowserWallet()
    } catch (error) {
      message.error('Failed to connect wallet.')
    }
  }

  return (
    <Button>
      {account ? (
        <Flex>
          <Tooltip
            title={
              <Flex vertical gap={20}>
                <p>
                  <strong>Wallet Address:</strong> {account}
                </p>
                <p>
                  <strong>Balance:</strong> {balance} ETH
                </p>
                <Button variant="secondary" onClick={deactivate}>
                  <DisconnectOutlined /> Disconnect Wallet
                </Button>
              </Flex>
            }
          >
            <UserOutlined /> Profile
          </Tooltip>
        </Flex>
      ) : (
        <span onClick={connectWallet}>Connect Wallet</span>
      )}
    </Button>
  )
}

export default Wallet
