import React, { Component } from "react";
import "./IndividualProject.scss";
import PaletteInProject from "../PaletteInProject/PaletteInProject";
import { connect } from "react-redux";
import { deleteProjectThunk } from "..//Thunks/ProjectThunks";
import { deletePaletteThunk } from "../Thunks/PaletteThunk";
import deleteBtn from '../utils/images/delete.svg'

export class IndividualProject extends Component {
  constructor({ project }) {
    super(project);
    this.state = {
      palettes: [],
      error: ""
    };
  }

  async componentDidMount() {
    const palettes = this.props.palettes.filter(palette => palette.project_id === this.props.id)
    if (palettes.length > 0) {
      this.setState({ palettes });
    } else {
      this.setState({ error: "Error fetching palettes" });
    }
  }

  componentWillReceiveProps(props) {
    const palettes = props.palettes.filter(
      palette => palette.project_id === this.props.id
    );
    if (palettes.length > 0) {
      this.setState({ palettes });
    } else {
      this.setState({ error: "Error fetching palettes" });
    }
  }

  deletePalette = async id => {
    const palettes = await this.props.deletePalette(id, this.props.id);
    if (palettes !== undefined) {
      this.setState({ palettes });
    } else {
      this.setState({ error: "Error: No palettes in project" });
    }
  };

  render() {
    let allPalettes;
    if (this.state.palettes.length === 0) {
      let addPalette = <h3>Add a palette!</h3>;
    } else {
      allPalettes = this.state.palettes.map(palette => {
        return (
          <PaletteInProject
            key={palette.id}
            id={palette.id}
            projectId={palette.project_id}
            color1={palette.color_1}
            color2={palette.color_2}
            color3={palette.color_3}
            color4={palette.color_4}
            color5={palette.color_5}
            deletePalette={this.deletePalette}
          />
        );
      });
    }
    return (
      <article className="individual-project">
        <section className='project-header'>
          <h3 className="project-title">{this.props.title}</h3>
          <img
            className="delete-project-btn"
            src={deleteBtn}
            alt="Trash can shaped delete button"
            onClick={() => this.props.deleteProject(this.props.id)}
          />
        </section>
        <section className="all-palettes">
          {this.state.palettes.length === 0 && <h3>Add a Palette!</h3>}
          {this.state.palettes.length === 0 && this.props.loading && <h2>Loading</h2>}
          {this.state.palettes && allPalettes}
        </section>
      </article>
    );
  }
}

export const mapStateToProps = store => ({
  ...store
});
export const mapDispatchToProps = dispatch => ({
  deleteProject: id => dispatch(deleteProjectThunk(id)),
  deletePalette: (id, projectId) => dispatch(deletePaletteThunk(id, projectId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualProject);
