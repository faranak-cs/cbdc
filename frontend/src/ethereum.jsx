import { ethers, Contract } from "ethers";
import OurToken from "./artifacts/contracts/OurToken.sol/OurToken.json";

const connectBlockchain = async () => {
  new Promise((resolve, reject) => {
    window.addEventListener("load", async () => {
      if (window.ethereum) {
        // connect metamask
        await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        // connect ethers
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = provider.getSigner();

        // access contract functions
        const ourToken = new Contract(
          OurToken.networks[
            window.ethereum.request({ method: "net_version" })
          ].address,
          OurToken.abi,
          signer
        );
        resolve({ provider, ourToken });
      }
      resolve({ provider: undefined, ourToken: undefined });
    });
  });
};

export default connectBlockchain;
