# A Novel Secure and Inclusive Central Bank Digital Currency (CBDC)
This artefact is built as part of my thesis on central bank digital currencies (CBDCs). The artefact is a decentralized app (dApp) built using:
- Hardhat (Ethereum development environment) `v2.20.1`
- OpenZeppelin (smart contracts) `v5.0.1`
- Ethers.js (web3 library) `v6.11.1`
- React.js (frontend library) `v18.2.0`
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
# Steps to build Artefact
## Setup
1. Install [MetaMask](https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) and [VS Code](https://code.visualstudio.com/).
2. Clone the repository using the following command:
```
git clone https://github.com/faranak-cs/cbdc.git
```
3. Open `cbdc` folder in VS Code and enter the following command in VS Code CLI to install Hardhat dependencies:
```
npm install
```
Use the same command to install React dependencies but first change directory to `cbdc/frontend` by using following command:
```
cd frontend
```
Now install dependencies.
```
npm install
```
Go back to parent directory `cbdc` using `cd ..`

4. Compile the smart contracts by using the following command in VS Code CLI:
```
npx hardhat compile
```
5. Write the following command in a new VS Code CLI instance. This will spin up a local Ethereum blockchain.
```
npx hardhat node
```
Keep that CLI instance running.

6. Now deploy the smart contracts on local Ethereum blockchain using the following command:
```
npx hardhat run .\scripts\deploy.js --network localhost
```
7. We need MetaMask wallet to be configured with our local Ethereum blockchain. Open MetaMask. Go to `Setting > Networks > Add a network > Add a network manually`. Now enter the following details and hit `Save`.

- Network Name:
```
Hardhat-localhost
```
- New RPC URL:
```
http://127.0.0.1:8545/
```
- Chain ID:
```
31337
```
- Currency symbol:
```
ETH
```
8. We need two Chrome browser profiles. One is for **central bank's perspective** and other one for **users' perspective**.
9. Now add three Ethereum accounts that were generated in step 5. Do this on both Chrome profiles. Open MetaMask. Go to `Select an account > Add account > Import account`. For Simplicity, enter the following details to add accounts and hit `Import`. 

- Enter your private key string here:
```
0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e
```
Name this account as `CB` (Central bank).
<hr>

```
0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d
```
Name this account as `P1` (Person 1)
<hr>

```
0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a
```
Name this account as `P2` (Person 2)
<hr>
10. All installations and configurations are done.

## Run
0. Local Ethereum blockchain should be running and smart contracts should be deployed.
1. Change the directory to `cbdc/frontend`. Now Enter the following command:
```
npm run dev
```
2. Application should start running on `http://localhost:5173/`
3. Copy the url and paste it on other Chrome profile.
4. Application should be running on both Chrome profiles.
## Deposit
0. Go to Chrome profile (central bank) and connect MetaMask.
1. Go to Deposit page. Enter amount and wallet address and hit `Deposit`.
2. MetaMask `Signature Request` will pop up. Sign it.
3. After successful transaction, a 65-bytes signature will be appeared. Copy it.
## Mint
0. Go to Chrome profile (user) and connect MetaMask.
1. Go to Mint page and paste the signature.
2. Enter the same wallet address and amount and hit `Mint`.
3. MetaMask transactions will pop up. Confirm them.
4. After successful transactions, tokens will be minted. 
## Check balance
0. Copy the same wallet address.
1. Go to Home page. Paste the address and hit `Check`.
2. Available tokens will be displayed.
# Artefact Package Diagram
![package](https://github.com/faranak-cs/cbdc/assets/73027299/aeaae73e-0a67-4067-8429-04bc57739222)
# Use Case Diagram
![usecase](https://github.com/faranak-cs/cbdc/assets/73027299/cfc27d22-b1f3-498d-836f-436db2fc0277)
# Current status of CBDCs worldwide 
![cbdc status](https://github.com/faranak-cs/cbdc/assets/73027299/74c1c22e-fcde-4077-968e-70e231e248c1)
Source: https://cbdctracker.org/
