import React, { Component } from "react";
import "./ProjectsContainer.scss";
import { getProjects, addNewProject } from "../utils/apiCalls";
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

  render() {
    const allProjects = this.state.projects.map(project => {
      return (
        <IndividualProject
          key={project.id}
          title={project.title}
          id={project.id}
        />
      );
    });
    return (
      <section className="project-section">
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
