import { getDefaultProvider } from 'ethers'
import { DAppProvider, Mainnet } from '@usedapp/core'

const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet')
  }
}

const DappProvider = ({ children }) => {
  return <DAppProvider config={config}>{children}</DAppProvider>
}

export default DappProvider
