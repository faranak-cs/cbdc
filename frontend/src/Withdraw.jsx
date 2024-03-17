import { useState } from "react";

function Withdraw() {
  const [result, setResult] = useState("");

  const handleWithdraw = () => {
    setResult("Amount is withdrawn");
  };
  return (
    <div>
      <h1>Withdraw Fiat Currency</h1>

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

      <br />
      <button className="btn btn-primary" onClick={handleWithdraw}>
        Withdraw
      </button>
      <hr />
      <label htmlFor="result" className="form-label">
        {result}
      </label>
    </div>
  );
}

export default Withdraw;
