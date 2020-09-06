import React from 'react';
import './App.css';
import Game from './components/Game';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>HELLO</p>
      </header>
      <main>
        <Game />
        <Board />
      </main>
    </div>
  );
}

export default App;
