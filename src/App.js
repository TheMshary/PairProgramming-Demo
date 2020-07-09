import React from "react";
import logo from "./rubber-ducky.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>0</code> Duckies!
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Click the Ducky!</p>
      </header>
    </div>
  );
}

export default App;
