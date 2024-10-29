import { useState, useEffect } from 'react'
import { useEthers } from '@usedapp/core'
import { ethers } from 'ethers'
import { Button, Flex, message, Tooltip } from 'antd'
import { DisconnectOutlined, UserOutlined } from '@ant-design/icons'
import './Wallet.scss'

const Wallet = () => {
  const { activateBrowserWallet, deactivate, account, library } = useEthers()
  const [balance, setBalance] = useState(null)

  useEffect(() => {
    if (account && library) {
      library.getBalance(account).then((bal) => {
        setBalance(ethers.utils.formatEther(bal))
      })
    }
  }, [account, library])

  const connectWallet = () => {
    try {
      activateBrowserWallet()
    } catch (error) {
      message.error('Failed to connect wallet.')
    }
  }

  return (
    <Flex className="wallet-btn-wrapper">
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
                <Button onClick={deactivate} icon={<DisconnectOutlined />}>
                  Disconnect Wallet
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
    </Flex>
  )
}

export default Wallet
