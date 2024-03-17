import { useState } from "react";

function Mint() {
  const [result, setResult] = useState("");

  const handleMint = () => {
    setResult("Tokens are minted to your wallet address");
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
        />
      </div>

      <br />
      <button className="btn btn-primary" onClick={handleMint}>
        Mint
      </button>
      <hr />
      <label htmlFor="result" className="form-label">
        {result}
      </label>
    </div>
  );
}

export default Mint;
