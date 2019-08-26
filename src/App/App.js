import React from 'react';
import './App.scss';
import ColorsContainer from '../ColorsContainer/ColorsContainer'
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer'

function App() {


  return (
    <main className="App">
      <header className="app-header__styling">
        <h1 className='project-title'>Palette Picker</h1>
      </header>
      <ColorsContainer/>
      <ProjectsContainer/>
    </main>
  );
}

export default App;
