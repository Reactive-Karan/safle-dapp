import { message, Modal } from 'antd'
import Button from '../button'
import './WalletModal.scss'
import { useEthers } from '@usedapp/core'
import React from 'react'

const WalletModal = ({ open, onClose }) => {
  const { activateBrowserWallet } = useEthers()

  const connectWallet = () => {
    try {
      activateBrowserWallet()
    } catch (error) {
      message.error('Failed to connect wallet.')
    }
  }
  return (
    <Modal
      centered
      className="wallet-connect-model"
      open={open}
      onCancel={() => onClose()}
      footer={
        <>
          <Button variant="secondary" onClick={() => onClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => connectWallet()}>
            Connect Now
          </Button>
        </>
      }
    >
      <h4> It seems you are not logged in, connect your wallet to explore games section</h4>
    </Modal>
  )
}

export default React.memo(WalletModal)
