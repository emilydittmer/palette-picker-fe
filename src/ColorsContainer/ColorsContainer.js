import React from 'react'
import './ColorsContainer.scss'
import Color from '../Color/Color'
import ColorScheme from 'color-scheme'


class ColorsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: [],
      locked:[false, false, false, false, false]
    }
  }
  
  componentDidMount() {
    const scheme = new ColorScheme();
    let colors = scheme.from_hue(this.randNum()).scheme('contrast').colors()
    this.setState({colors})
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
    this.setState({colors})
  }

  render() {
    return (
      <section className="color-container__styling">
      <form className="color-container__form">
        <button>Save to Project</button>
        <button
          onClick={(e) => this.generateNewColors(e)}      
        >Generate more colors</button>
      </form>
      <article className="color-container__template">
        <Color backgroundColor={this.state.colors[0]} index='0'/>
        <Color backgroundColor={this.state.colors[1]} index='1'/>
        <Color backgroundColor={this.state.colors[2]} index='2'/>
        <Color backgroundColor={this.state.colors[3]} index='3'/>
        <Color backgroundColor={this.state.colors[4]} index='4'/>
      </article>
      </section>
    )
  }
}

export default ColorsContainer;