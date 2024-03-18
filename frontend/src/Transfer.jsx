import { useState } from "react";

function Transfer() {
  const [result, setResult] = useState("");

  const handleTransfer = () => {
    setResult("Tokens are transferred");
  };
  return (
    <div>
      <h1>Transfer CBDC Tokens</h1>

      <div className="form-group">
        <label htmlFor="wallet_address" className="form-label">
          Enter the wallet address of receiver:
        </label>
        <input
          type="text"
          name="wallet_address"
          id="wallet_address"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="token_amount" className="form-label">
          Enter the amount of tokens:
        </label>
        <input
          type="number"
          name="token_amount"
          id="token_amount"
          className="form-control"
        />
      </div>

      <br />
      <button className="btn btn-primary" onClick={handleTransfer}>
        Transfer
      </button>
      <hr />
      <label htmlFor="result" className="form-label">
        {result}
      </label>
    </div>
  );
}

export default Transfer;
