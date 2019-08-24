import React, { Component } from 'react';
import './IndividualProject.scss'
import { fetchPalettesInProject } from '../utils/apiCalls'

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
    return(
      <article>
        <h1>{this.props.title}</h1>
    
      </article>
    )
  }
}

export default IndividualProject;