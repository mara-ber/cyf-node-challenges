import React from 'react';
import logo from './logo.svg';
import './App.css';
import CityList from './Cities';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          MINI-GUIDE
        </p>
        <CityList />
      </header>
    </div>
  );
}

export default App;
