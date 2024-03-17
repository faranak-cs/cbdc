import { useState } from "react";

function Redeem() {
  const [sig, setSig] = useState("");

  const handleRedeem = () => {
    setSig("0xuxyz");
  };
  return (
    <div>
      <h1>Redeem CBDC Tokens</h1>

      <div className="form-group">
        <label htmlFor="redeem_amount" className="form-label">
          Enter the amount of tokens:
        </label>
        <input
          type="number"
          name="redeem_amount"
          id="redeem_amount"
          className="form-control"
        />
      </div>

      <br />
      <button className="btn btn-primary" onClick={handleRedeem}>
        Redeem
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

export default Redeem;
