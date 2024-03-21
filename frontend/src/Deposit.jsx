import { ethers, Contract } from "ethers";
import OurToken from "./artifacts/contracts/OurToken.sol/OurToken.json";

import { useState } from "react";

function Deposit() {
  const [msg, setMsg] = useState("");
  const [sig, setSig] = useState("");
  const [value, setValue] = useState(0);
  const [spender, setSpender] = useState("");

  const handleDeposit = async () => {
    if (typeof window.ethereum !== "undefined") {
      // connect ethers ✅
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      // contract address ✅
      // contract ABI ✅
      // signer ✅
      const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const token = new ethers.Contract(tokenAddress, OurToken.abi, signer);

      // set values for signature ✅
      const [nonce, name, version, chainId] = [0, "OurToken", "1", 31337];
      const deadline = ethers.MaxUint256;

      try {
        // generate signature to access tokens ✅
        const sig = await signer.signTypedData(
          {
            name,
            version,
            chainId,
            verifyingContract: tokenAddress,
          },
          {
            Permit: [
              {
                name: "owner",
                type: "address",
              },
              {
                name: "spender",
                type: "address",
              },
              {
                name: "value",
                type: "uint256",
              },
              {
                name: "nonce",
                type: "uint256",
              },
              {
                name: "deadline",
                type: "uint256",
              },
            ],
          },
          {
            owner: signer.address,
            spender,
            value,
            nonce,
            deadline,
          }
        );

        // mint tokens to owner address
        await token.mint(signer.address, value);

        // set signature
        setSig(sig);

        // set message
        setMsg("Deposit successfully!");
      } catch (error) {
        console.log(error);
        setMsg("Deposit unsuccessful!");
      }
    } else {
      setMsg("Install MetaMask!");
    }
  };

  return (
    <div>
      <h1>Deposit Fiat Currency</h1>
      <div className="form-group">
        <label htmlFor="deposit_amount" className="form-label">
          Enter the amount:
        </label>
        <input
          type="number"
          name="deposit_amount"
          id="deposit_amount"
          className="form-control"
          onKeyUp={(e) => {
            setValue(e.target.value);
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

      <br />
      <button className="btn btn-primary" onClick={handleDeposit}>
        Deposit
      </button>
      <hr />

      <div className="form-group">
        <label htmlFor="signature" className="form-label">
          Use the signature below:
        </label>
        <input
          type="text"
          name="signature"
          id="signature"
          className="form-control"
          value={sig}
          readOnly
        />
      </div>
      <hr />
      <label className="form-label">{msg}</label>
    </div>
  );
}

export default Deposit;
