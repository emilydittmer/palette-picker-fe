import React, { Component } from "react";
import "./ProjectsContainer.scss";
import IndividualProject from "../IndividualProject/IndividualProject";
import { connect } from "react-redux";
import { getProjectsThunk, addProjectThunk } from "../Thunks/ProjectThunks";

export class ProjectsContainer extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      newTitle: "",
      error: null
    };
  }

  async componentDidMount() {
    this.props.getAllProjects();
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckTitle = () => {
    return this.props.projects.filter(
      project => project.title === this.state.newTitle
    );
  };

  addNewProject(event) {
    event.preventDefault();
    const project = {
      title: this.state.newTitle
    };
    let title = this.handleCheckTitle();
    if (title.length > 0) {
      this.setState({ error: "Project name taken" });
    } else {
      this.props.addProject(project);
      this.resetInputs();
      this.setState({ error: null });
    }
  }

  resetInputs = () => {
    this.setState({ newTitle: "" });
  };

  render() {
    const allProjects = this.props.projects.map(project => {
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
        <form className="add-project-form">
          <input
            type="text"
            placeholder="New Project Title"
            value={this.state.newTitle}
            onChange={event => this.handleChange(event)}
            name="newTitle"
            className="new-title-input"
          />
          <button
            onClick={event => this.addNewProject(event)}
            className="add-project-btn"
          >
            Add New Project
          </button>
          {this.state.error}
        </form>
        {allProjects}
      </section>
    );
  }
}

export const mapStateToProps = store => ({
  ...store
});

export const mapDispatchToProps = dispatch => ({
  getAllProjects: () => dispatch(getProjectsThunk()),
  addProject: project => dispatch(addProjectThunk(project))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsContainer);
