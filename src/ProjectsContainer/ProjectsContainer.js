import React, { Component } from 'react';
import './ProjectsContainer.scss';
import { getProjects }from '../utils/apiCalls'
import IndividualProject from '../IndividualProject/IndividualProject'


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
    const allProjects = this.state.projects.map(project => {
      return (
        <IndividualProject 
          key={project.id}
          title={project.title}
          id={project.id}
        />
      )
    })
    return(
      <section>
        <h2>My Projects</h2>
        {allProjects}
      </section>
    )
  }
}

export default ProjectsContainer