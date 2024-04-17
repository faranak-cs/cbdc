# A Novel Secure and Inclusive Central Bank Digital Currency (CBDC)
This artefact is built as part of my thesis on central bank digital currencies (CBDCs). The artefact is a decentralized app (dApp) built using **Hardhat** (Ethereum development environment), **OpenZeppelin** (Standard Smart Contracts), **Ethers.js** (web3 library) and **React** (frontend). 
# Flow of Artefact
1. User deposits fiat currency
2. Central bank generates a digital signature.
3. Equivalent CBDC tokens are minted in central bank's wallet. 
4. User enters signature and smart contracts verifies it.
5. Tokens are transferred in user's wallet.
# Features in Artefact
MetaMask wallet is used to confirm transactions and sign messgages.
1. We have utilized [EIP-20](https://eips.ethereum.org/EIPS/eip-20) as our token standard. Our CBDC tokens exist as ERC20 tokens.
2. We have utlized [EIP-712](https://eips.ethereum.org/EIPS/eip-712) as our signature signing standard. 
3. We have used [EIP-2612](https://eips.ethereum.org/EIPS/eip-2612) as our signature approval standard.
# How to Run
1. Install MetaMask wallet extension in the Chrome browser from [here](https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn).
# Software Package Diagram
![package](https://github.com/faranak-cs/cbdc/assets/73027299/aeaae73e-0a67-4067-8429-04bc57739222)
# Use Case Diagram
![usecase](https://github.com/faranak-cs/cbdc/assets/73027299/cfc27d22-b1f3-498d-836f-436db2fc0277)
# Current status of CBDCs worldwide 
![cbdc status](https://github.com/faranak-cs/cbdc/assets/73027299/74c1c22e-fcde-4077-968e-70e231e248c1)
Source: https://cbdctracker.org/
