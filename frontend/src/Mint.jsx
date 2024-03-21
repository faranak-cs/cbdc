import { ethers, Contract } from "ethers";
import Vault from "./artifacts/contracts/Vault.sol/Vault.json";
import OurToken from "./artifacts/contracts/OurToken.sol/OurToken.json";
import { useState } from "react";

function Mint() {
  const [msg, setMsg] = useState("");
  const [sig, setSig] = useState("");
  const [spender, setSpender] = useState("");
  const [amount, setAmount] = useState(0);

  const handleMint = async () => {
    if (typeof window.ethereum !== "undefined") {
      // connect ethers ✅
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      // vault
      // contract address ✅
      // contract ABI ✅
      // signer ✅
      const vaultAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      const vault = new ethers.Contract(vaultAddress, Vault.abi, signer);

      // token
      // contract address ✅
      // contract ABI ✅
      // signer ✅
      const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const token = new ethers.Contract(tokenAddress, OurToken.abi, signer);

      // set values to verify signature ✅
      const deadline = ethers.MaxUint256;
      const { v, r, s } = ethers.Signature.from(sig);
      const owner = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199";

      try {
        // function ✅
        // await vault.depositWithPermit(spender, amount, deadline, v, r, s);

        // verify and permit ✅
        await token.permit(owner, spender, amount, deadline, v, r, s);

        // transfer ✅
        await token.transferFrom(owner, spender, amount);

        // set message
        setMsg("Tokens are minted successfully!");
      } catch (error) {
        console.log(error);
        setMsg("Minting unsuccessful!");
      }
    } else {
      setMsg("Install MetaMask first!");
    }
  };

  return (
    <div>
      <h1>Mint CBDC Tokens</h1>
      <div className="form-group">
        <label htmlFor="signature" className="form-label">
          Enter the signature:
        </label>
        <input
          type="text"
          name="signature"
          id="signature"
          className="form-control"
          onChange={(e) => {
            setSig(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="wallet_address" className="form-label">
          Enter the wallet address:
        </label>
        <input
          type="text"
          name="wallet_address"
          id="wallet_address"
          className="form-control"
          onKeyUp={(e) => {
            setSpender(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="mint_token" className="form-label">
          Enter the amount:
        </label>
        <input
          type="number"
          name="mint_token"
          id="mint_token"
          className="form-control"
          onKeyUp={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>

      <br />
      <button className="btn btn-primary" onClick={handleMint}>
        Mint
      </button>
      <hr />
      <label className="form-label">{msg}</label>
    </div>
  );
}

export default Mint;
