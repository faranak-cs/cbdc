import { ethers, Contract, toNumber } from "ethers";
import OurToken from "./artifacts/contracts/OurToken.sol/OurToken.json";

import { useState } from "react";

function Home() {
  const [account, setAccount] = useState("");
  const [tokenAmount, setTokenAmount] = useState(0);

  const handleCheck = async () => {
    if (typeof window.ethereum !== "undefined") {
      // connect ethers ✅
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      // contract address ✅
      // contract ABI ✅
      // signer ✅
      const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const token = new ethers.Contract(tokenAddress, OurToken.abi, signer);

      try {
        setTokenAmount(toNumber(await token.balanceOf(account)));
      } catch (error) {
        console.log(error);
        setTokenAmount(-1);
      }
    } else {
      setTokenAmount(-1);
    }
  };

  return (
    <div>
      <h1>CBDC Token System</h1>
      <p>User details ...</p>

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

      <br />
      <button className="btn btn-primary" onClick={handleCheck}>
        Check
      </button>
      <hr />

      <div className="form-group">
        <label htmlFor="tokens" className="form-label">
          Available Tokens:
        </label>
        <input
          type="number"
          name="tokens"
          id="tokens"
          className="form-control"
          value={tokenAmount}
          readOnly
        />
      </div>
    </div>
  );
}

export default Home;
