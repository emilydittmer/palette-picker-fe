import React, { Component } from 'react';
import './ProjectsContainer.scss';
import { getProjects }from '../utils/apiCalls'


class ProjectsContainer extends Component{
  constructor() {
    super();
    this.state={
      projects:[]
    }
  }

  async componentDidMount(){
    const projects = await getProjects()
    this.setState({ projects })
  }

  render(){
    return(
      <h2>My Projects</h2>
    )
  }
}

export default ProjectsContainer