import React from 'react';
import './App.scss';
import ColorsContainer from '../ColorsContainer/ColorsContainer'

function App() {


  return (
    <main className="App">
      <header className="app-header__styling">
        <h1>Palette Picker</h1>
      </header>
      <ColorsContainer />
    </main>
  );
}

export default App;
