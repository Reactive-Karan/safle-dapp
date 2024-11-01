import { ethers } from 'ethers'
import { useEthers } from '@usedapp/core'
import { useState, useEffect } from 'react'
import { Flex, message, Tooltip } from 'antd'
import { useNavigate } from 'react-router-dom'
import { DisconnectOutlined, UserOutlined, ApiOutlined } from '@ant-design/icons'
import { RoutingConfig } from '../../consts/routeConsts'
import Button from '../button'

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
  const isMobile = window.innerWidth < 768 // Simple mobile detection

  return (
    <>
      {isMobile ? (
        <>
          {account ? (
            <Flex vertical>
              <Flex>
                <UserOutlined /> Profile
              </Flex>
              <div>
                <p>
                  <strong>Wallet Address:</strong> {account}
                </p>
                <p>
                  <strong>Balance:</strong> {balance} ETH
                </p>
              </div>
              <Button variant="secondary" onClick={deactivate}>
                <DisconnectOutlined /> Disconnect Wallet
              </Button>
            </Flex>
          ) : (
            <Button variant="secondary" onClick={connectWallet}>
              <ApiOutlined /> Connect Wallet
            </Button>
          )}
        </>
      ) : (
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
      )}
    </>
  )
}

export default Wallet
