import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Hello React World from Muhammad Irfan Afzal
        </h3>
        <p>
          Auto Deployment on Surge through Github actions with custome YAML config.
        </p>
        <a
          className="App-link"
          href="https://mi3afzal.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact me Here
        </a>
      </header>
    </div>
  );
}

export default App;
