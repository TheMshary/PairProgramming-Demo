import React, { useState } from "react";
import logo from "./rubber-ducky.png";
import "./App.css";

function App() {
  const [duckies, setDuckies] = useState(0);
  const addDucky = () => setDuckies(duckies + 1);
  return (
    <div className="App">
      <header className="App-header">
        <code>{duckies}</code>
        <div onClick={addDucky}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>Click the Ducky!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
