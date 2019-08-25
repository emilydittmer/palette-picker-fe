import React from 'react'
import './Color.scss'

const Color = ({backgroundColor, index}) => {
  
  const styling = {
    backgroundColor: `#${backgroundColor}`,
  }
  
  return (
    <div className="color-box"   style={styling}>
        <input type='checkbox' data-on="Lock" data-off="Unlock" className="color-box__save-button"/>
    </div>
  )
}


export default Color;