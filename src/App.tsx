import React from 'react';
import inProgress from './assets/images/under-construction.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={inProgress} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
