import { useState, useEffect } from "react";
import connectBlockchain from "./ethereum";

function App() {
  const [ourToken, setOurToken] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const { ourToken } = await connectBlockchain();
      setOurToken(ourToken);
    };
    init();
  }, []);

  if (typeof window.ethereum === "undefined") {
    return (
      <div className="container">
        <div className="col-sm-12">
          <h1>CBDC Token System</h1>
          <p>Install MetaMask</p>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="col-sm-12">
        <h1>CBDC Token System</h1>
        {/* render another component */}
      </div>
    </div>
  );
}

export default App;
