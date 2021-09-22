import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{counter}</div>
        <div className="row">
          <button className="btcounter" onClick={() => setCounter(counter + 1)}>
            +
          </button>
          <button className="btcounter" onClick={() => setCounter(counter - 1)}>
            -
          </button>
        </div>
        <div className="row">
          <button className="btReset" onClick={() => setCounter(0)}>Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
