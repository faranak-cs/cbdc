import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isConnected, setIsConnected] = useState("Connect");

  // connectWallet button handler
  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" });
      } catch (err) {
        console.log(err);
      }
      setIsConnected("Connected");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log(accounts);
    } else {
      setIsConnected("Install MetaMask");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">Home</Link>&nbsp;|&nbsp;
        <Link to="/deposit">Deposit</Link>&nbsp;|&nbsp;
        <Link to="/mint">Mint</Link>&nbsp;|&nbsp;
        <Link to="/transfer">Transfer</Link>&nbsp;|&nbsp;
        <Link to="/redeem">Redeem</Link>&nbsp;|&nbsp;
        <Link to="/withdraw">Withdraw</Link>
        <button
          className="btn btn-primary"
          onClick={connectWallet}
          style={{ position: "absolute", right: 0 }}
        >
          {isConnected}
        </button>
      </nav>
      <hr />
    </>
  );
}

export default Nav;
