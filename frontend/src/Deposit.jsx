import { useState } from "react";

function Deposit() {
  const [sig, setSig] = useState("");

  const handleDeposit = () => {
    setSig("0xuxyz");
  };

  return (
    <div>
      <h1>Deposit Fiat Currency</h1>
      <div className="form-group">
        <label htmlFor="deposit_amount" className="form-label">
          Enter the amount ($):
        </label>
        <input
          type="number"
          name="deposit_amount"
          id="deposit_amount"
          className="form-control"
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
        />
      </div>
    </div>
  );
}

export default Deposit;
