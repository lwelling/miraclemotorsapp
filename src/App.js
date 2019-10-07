import React from 'react';
import logo from './MM-Icon1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Under Construction...
        </p>
        <a
          className="App-link"
          href={"mailto:lucaswelling1@gmail.com?subject=Add Me to the Email Serv!"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign-Up for Inventory Reports
        </a>
      </header>
    </div>
  );
}

export default App;
