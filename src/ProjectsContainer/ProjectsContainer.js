import React, { Component } from "react";
import "./ProjectsContainer.scss";
import { getProjects, addNewProject, deleteProject } from "../utils/apiCalls";
import IndividualProject from "../IndividualProject/IndividualProject";

class ProjectsContainer extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      newTitle: ""
    };
  }

  async componentDidMount() {
    const projects = await getProjects();
    this.setState({ projects });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewProject(event) {
    event.preventDefault();
    const project = {
      title: this.state.newTitle
    };
    addNewProject(project)
    this.resetInputs();
  }

  resetInputs = () => {
    this.setState({ newTitle: "", });
  };

  deleteProject = async id => {
    let removedProject = await deleteProject(id)
    this.setState({projects: [...this.state.projects]})
  }

  render() {
    const allProjects = this.state.projects.map(project => {
      return (
        <IndividualProject
          key={project.id}
          title={project.title}
          id={project.id}
          deleteProject = {this.deleteProject}
        />
      );
    });
    return (
      <section>
        <h2>My Projects</h2>
        <form>
          <input
            type="text"
            placeholder="New Project Title"
            value={this.state.newTitle}
            onChange={event => this.handleChange(event)}
            name="newTitle"
          />
          <button onClick={event => this.addNewProject(event)}>Add New Project</button>
        </form>
        {allProjects}
      </section>
    );
  }
}

export default ProjectsContainer;
