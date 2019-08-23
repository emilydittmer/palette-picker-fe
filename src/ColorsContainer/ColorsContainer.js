import React from 'react'
import './ColorsContainer.scss'
import Color from '../Color/Color'

const ColorsContainer = () => {
  
  return (
    <section className="color-container__styling">
      <Color backgroundColor={'red'}/>
      <Color backgroundColor={'blue'}/>
      <Color backgroundColor={'green'}/>
      <Color backgroundColor={'purple'}/>
      <Color backgroundColor={'grey'}/>
      <Color backgroundColor={'red'}/>
    </section>
  )
}

export default ColorsContainer;