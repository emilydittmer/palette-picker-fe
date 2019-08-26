import React, { Component } from 'react';
import './IndividualProject.scss'
import { fetchPalettesInProject } from '../utils/apiCalls'
import PaletteInProject from '../PaletteInProject/PaletteInProject'
import { connect } from 'react-redux'
import { deleteProjectThunk } from '..//Thunks/ProjectThunks'
import { deletePaletteThunk } from '../Thunks/PaletteThunk'

class IndividualProject extends Component {
  constructor({project}){
    super(project);
    this.state={
      palettes:[],
      error: ''
    }
  }

  async componentDidMount(){
    const palettes = await fetchPalettesInProject(this.props.id)
    console.log(palettes)
    if(palettes !== 'Error fetching palette') {
      this.setState({ palettes })
    } else {
      this.setState({error: palettes})
    }
  }

  async componentDidUpdate() {
    const palettes = await fetchPalettesInProject(this.props.id)
    if (palettes === this.state.palettes) {
      return
    } else if (palettes !== 'Error fetching palette') {
      this.setState({ palettes })
    } else {
      this.setState({error: palettes})
    }
  }

  deletePalette = async (id) => {
    const palettes = await this.props.deletePalette(id, this.props.id)
    console.log(palettes)
    if(palettes !== undefined) {
      this.setState({ palettes })
    } else {
      this.setState({error: 'Error: No palettes in project'})
    }
  }

  render(){
    let addPalette = {};
    let allPalettes
    if(this.state.error){
      addPalette = <h3>Add a palette!</h3>
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
        )
      })
    }
    return(
      <article className="individual-project">
        <h1>{this.props.title}</h1>
        <button className='delete-project-btn' onClick={() => this.props.deleteProject(this.props.id)}>🗑</button>
        <section className='all-palettes'>
          {this.state.error && addPalette}
          {this.state.palettes && allPalettes}
        </section>
      </article>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  deleteProject: id => dispatch(deleteProjectThunk(id)),
  deletePalette: (id, projectId) => dispatch(deletePaletteThunk(id, projectId))
})

export default connect(null, mapDispatchToProps)(IndividualProject);