import React, { Component } from 'react';
import './IndividualProject.scss'
import { fetchPalettesInProject } from '../utils/apiCalls'
import PaletteInProject from '../PaletteInProject/PaletteInProject'

class IndividualProject extends Component {
  constructor(project){
    super(project);
    this.state={
      palettes:[]
    }
  }

  async componentDidMount(){
    const palettes = await fetchPalettesInProject(this.props.id)
    this.setState({ palettes })
  }

  render(){
    const allPalettes = this.state.palettes.map(palette => {
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
        />
      )
    })
    return(
      <article>
        <h1>{this.props.title}</h1>
          {allPalettes}
      </article>
    )
  }
}

export default IndividualProject;