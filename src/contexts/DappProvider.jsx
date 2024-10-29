import { DAppProvider, Mainnet } from "@usedapp/core";
import { getDefaultProvider } from "ethers";

const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider("mainnet"),
  },
};

const DappProvider = ({ children }) => {
  return <DAppProvider config={config}>{children}</DAppProvider>;
};

export default DappProvider;
