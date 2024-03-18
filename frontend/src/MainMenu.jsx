import Button from "./Button";
function MainMenu() {
  return (
    <div>
      <h1>CBDC Token System</h1>
      <Button name={"Deposit"} />
      <Button name={"Mint"} />
      <Button name={"Transfer"} />
      <Button name={"Redeem"} />
      <Button name={"Withdraw"} />
    </div>
  );
}

export default MainMenu;
