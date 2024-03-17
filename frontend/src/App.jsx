import { useState } from "react";
import connectBlockchain from "./ethereum";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import MainMenu from "./MainMenu";
import Deposit from "./Deposit";
import Mint from "./Mint";
import Transfer from "./Transfer";
import Redeem from "./Redeem";
import Withdraw from "./Withdraw";

function App() {
  const [accounts, setAccounts] = useState([]);
  // const [ourToken, setOurToken] = useState(undefined);

  // useEffect(() => {
  //   const init = async () => {
  //     const { ourToken } = await connectBlockchain();
  //     setOurToken(ourToken);
  //   };
  //   init();
  // }, []);

  // if (typeof window.ethereum === "undefined") {
  //   return (
  //     <div>
  //       <h1>CBDC Token System</h1>
  //       <p>Install MetaMask</p>
  //     </div>
  //   );
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={MainMenu} />
            <Route path="/deposit" component={Deposit} />
            <Route path="/mint" component={Mint} />
            <Route path="/transfer" component={Transfer} />
            <Route path="/redeem" component={Redeem} />
            <Route path="/withdraw" component={Withdraw} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
