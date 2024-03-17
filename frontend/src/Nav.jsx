import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">Main Menu</Link>&nbsp;|&nbsp;
        <Link to="/deposit">Deposit</Link>&nbsp;|&nbsp;
        <Link to="/mint">Mint</Link>&nbsp;|&nbsp;
        <Link to="/transfer">Transfer</Link>&nbsp;|&nbsp;
        <Link to="/redeem">Redeem</Link>&nbsp;|&nbsp;
        <Link to="/withdraw">Withdraw</Link>
      </nav>
      <hr />
    </>
  );
}

export default Nav;
