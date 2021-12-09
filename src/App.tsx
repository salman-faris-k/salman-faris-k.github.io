import React from 'react';
import inProgress from './assets/images/under-construction.gif';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={inProgress} className="App-logo" alt="logo"/>
                <p>
                    We'll be up soon...
                </p>
            </header>
        </div>
    );
}

export default App;
