import React from 'react'
import './ColorsContainer.scss'
import Color from '../Color/Color'
import ColorScheme from 'color-scheme'
import { getProjects, addNewPalette } from '../utils/apiCalls'
import { addPaletteThunk } from '../Thunks/PaletteThunk'
import { connect } from 'react-redux'
import { addPalette } from '../Actions'
 

class ColorsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: [],
      locked:[false, false, false, false, false],
      projects: [],
      currentProject: null,
      error: ''
    }
  }
  
  async componentDidMount() {
    const scheme = new ColorScheme();
    let colors = scheme.from_hue(this.randNum()).scheme('contrast').colors()
    this.props.addPalette(colors)
    const projects = await getProjects();
    this.setState({ projects });
  }
  
  randNum = () => Math.floor(Math.random() * 500)
  
  generateNewColors = (e) => {
    e.preventDefault()
    const scheme = new ColorScheme()
    const colors = scheme.from_hue(this.randNum()).scheme('contrast').colors()
    this.state.locked.forEach((lock, i) => {
      if (lock === true) {
        colors[i] = this.state.colors[i]
      } 
    })
    this.props.addPalette(colors)
  }

  handleLockColor = (index) => {
    let locks = this.state.locked;
    locks[index] = !locks[index];
    this.setState({locked: locks})
    console.log(this.state.locked)
  }

  handleOnChange = (e) => {
    this.setState({currentProject: e.target.value})
  }

  handleSavePalette = (e) => {
    e.preventDefault()
    addNewPalette(this.state.colors, this.state.currentProject)
      .catch(error => console.log(error.message))
  }

  render() {
    const projectNames = this.state.projects.map( project => {
      return <option value={project.id}>{project.title}</option>
    })
    return (
      <section className="color-container__styling">
      <form className="color-container__form">
        <button
          onClick={(e) => this.generateNewColors(e)}      
        >Generate more colors</button>
        <select
          value={this.state.currentProject}
          onChange={(e) => this.handleOnChange(e)}
        >
          <option>Select Project</option>
          {projectNames}
        </select>
        <button
          onClick={(e) => this.handleSavePalette(e)}
        >Save to Project</button>
      </form>
      <article className="color-container__template">
        <Color backgroundColor={this.props.currentPalette[0]} index='0' handleLockColor={this.handleLockColor}/>
        <Color backgroundColor={this.props.currentPalette[1]} index='1' handleLockColor={this.handleLockColor}/>
        <Color backgroundColor={this.props.currentPalette[2]} index='2' handleLockColor={this.handleLockColor}/>
        <Color backgroundColor={this.props.currentPalette[3]} index='3' handleLockColor={this.handleLockColor}/>
        <Color backgroundColor={this.props.currentPalette[4]} index='4' handleLockColor={this.handleLockColor}/>
      </article>
      </section>
    )
  }
}

const mapStateToProps = store => ({
  ...store
})

const mapDispatchToProps = dispatch => ({
  addPalette: (colors) => dispatch(addPalette(colors))
})
export default connect(mapStateToProps, mapDispatchToProps)(ColorsContainer);