import React from 'react';
import './App.scss';
import ColorsContainer from '../ColorsContainer/ColorsContainer'
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer'

function App() {


  return (
    <main className="App">
      <header className="app-header__styling">
        <h1>Palette Picker</h1>
      </header>
      <section className='main-section'>
        <ColorsContainer />
        <ProjectsContainer />
      </section>
    </main>
  );
}

export default App;
