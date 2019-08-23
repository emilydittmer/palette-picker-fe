import React, { Component } from 'react';
import './App.scss';
import { getProjects, getPalettes }from '../utils/apiCalls'
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      palettes: []
    }
  }

  // async componentDidMount() {
  //   const projects = await getProjects()
  //   this.setState({projects})
  //   const palettes = await getPalettes()
  //   this.setState({palettes})
  // }

  render() {
    return (
      <div className="App">
        <ProjectsContainer />
      </div>
    );
  }
}

export default App;
