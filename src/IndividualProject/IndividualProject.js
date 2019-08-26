import React, { Component } from 'react';
import './IndividualProject.scss'
import { fetchPalettesInProject, deletePalette } from '../utils/apiCalls'
import PaletteInProject from '../PaletteInProject/PaletteInProject'

class IndividualProject extends Component {
  constructor(project){
    super(project);
    this.state={
      palettes:[],
      error: ''
    }
  }

  async componentDidMount(){
    const palettes = await fetchPalettesInProject(this.props.id)
    if(palettes !== 'Error fetching palette') {
      this.setState({ palettes })
    } else {
      this.setState({error: palettes})
    }
  }

  deletePalette = async id => {
    let removedPalette = await deletePalette(id)
    await this.setState({palettes: [...this.state.palettes]})
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
      <article>
        <h1>{this.props.title}</h1>
        <section className='all-palettes'>
          {this.state.error && addPalette}
          {this.state.palettes && allPalettes}
        </section>
      </article>
    )
  }
}

export default IndividualProject;