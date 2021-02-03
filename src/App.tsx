import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to Funkoa!</h1>
        <p>Funkoa runs on my private kubernetes raspberry-pi cluster. Here we deploy stuff to have fun and practice full stack coding.</p>
          <img alt='digs-pina-colada' className={'pina'} src={'/images/pexels-i̇brahim-hakkı-uçman-4134384.jpg'}></img>
      </header>
    </div>
  );
}

export default App;
