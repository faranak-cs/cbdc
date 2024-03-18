import { ethers, Contract } from "ethers";
import OurToken from "./artifacts/contracts/OurToken.sol/OurToken.json";
import { useState, useRef } from "react";

function Mint() {
  const [mint, setMint] = useState("Mint");
  const [result, setResult] = useState("");
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState(0);

  const handleMint = async () => {
    if (typeof window.ethereum !== "undefined") {
      // connect ethers ✅
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      // contract address ✅
      const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      // contract ABI (blueprint) ✅
      // signer ✅
      const ourToken = new ethers.Contract(
        contractAddress,
        OurToken.abi,
        signer
      );
      console.log(ourToken);
      try {
        // function ✅
        await ourToken.mint(account, amount);
        setResult("Tokens are minted successfully!");
      } catch (error) {
        console.log(error);
        setResult("Minting unsuccessful!");
      }
    } else {
      setMint("Install MetaMask!");
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
          onChange={(e) => {
            setAccount(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="mint_token" className="form-label">
          Enter the amount of tokens:
        </label>
        <input
          type="number"
          name="mint_token"
          id="mint_token"
          className="form-control"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>

      <br />
      <button className="btn btn-primary" onClick={handleMint}>
        {mint}
      </button>
      <hr />
      <label className="form-label">{result}</label>
    </div>
  );
}

export default Mint;
