import React from 'react'
import './ColorsContainer.scss'
import Color from '../Color/Color'
import ColorScheme from 'color-scheme'
import { getProjects, addNewPalette } from '../utils/apiCalls'
import { addPaletteThunk, getPalettesThunk } from '../Thunks/PaletteThunk'
import { connect } from 'react-redux'
import { addPalette } from '../Actions'

class ColorsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      locked:[false, false, false, false, false],
      currentProject: '',
      error: ''
    }
  }

  async componentDidMount() {
    const scheme = new ColorScheme();
    let colors = scheme.from_hue(this.randNum()).scheme('contrast').colors()
    this.props.addPalette(colors)
    this.props.getPalettes()
  }

  randNum = () => Math.floor(Math.random() * 500);

  generateNewColors = e => {
    e.preventDefault();
    const scheme = new ColorScheme();
    const colors = scheme
      .from_hue(this.randNum())
      .scheme("contrast")
      .colors();
    this.state.locked.forEach((lock, i) => {
      if (lock === true) {
        colors[i] = this.state.colors[i];
      }
    });
    this.props.addPalette(colors);
  };

  handleLockColor = index => {
    let locks = this.state.locked;
    locks[index] = !locks[index];
    this.setState({locked: locks})
  }

  handleOnChange = e => {
    this.setState({ currentProject: e.target.value });
  };

  handleSavePalette = async (e) => {
    e.preventDefault()
    await this.props.savePalette(this.props.currentPalette, this.state.currentProject)
      .catch(error => console.log(error.message))
  }

  render() {
    const projectNames = this.props.projects.map( project => {
      return <option value={project.id}>{project.title}</option>
    })
    return (
      <section className="color-container__styling">
        <form className="color-container__form">
          <button
            className="generate-btn"
            onClick={e => this.generateNewColors(e)}
          >
            Generate more colors
          </button>
          <div className="add-to-project">
            <select
              value={this.state.currentProject}
              onChange={e => this.handleOnChange(e)}
            >
              <option>Select Project</option>
              {projectNames}
            </select>
            <button className='save-to-palette-btn' onClick={e => this.handleSavePalette(e)}>
              Save to Project
            </button>
          </div>
        </form>
        <article className="color-container__template">
          <Color
            backgroundColor={this.props.currentPalette[0]}
            index="0"
            handleLockColor={this.handleLockColor}
          />
          <Color
            backgroundColor={this.props.currentPalette[1]}
            index="1"
            handleLockColor={this.handleLockColor}
          />
          <Color
            backgroundColor={this.props.currentPalette[2]}
            index="2"
            handleLockColor={this.handleLockColor}
          />
          <Color
            backgroundColor={this.props.currentPalette[3]}
            index="3"
            handleLockColor={this.handleLockColor}
          />
          <Color
            backgroundColor={this.props.currentPalette[4]}
            index="4"
            handleLockColor={this.handleLockColor}
          />
        </article>
      </section>
    );
  }
}

const mapStateToProps = store => ({
  ...store
});

const mapDispatchToProps = dispatch => ({
  addPalette: (colors) => dispatch(addPalette(colors)),
  savePalette: (colors, id) => dispatch(addPaletteThunk(colors, id)),
  getPalettes: () => dispatch(getPalettesThunk())
})
export default connect(mapStateToProps, mapDispatchToProps)(ColorsContainer);
