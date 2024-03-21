import { useState } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import Deposit from "./Deposit";
import Mint from "./Mint";
import Transfer from "./Transfer";
import Redeem from "./Redeem";
import Withdraw from "./Withdraw";

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
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
