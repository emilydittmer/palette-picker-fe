import React from 'react'
import './Color.scss'

const Color = ({backgroundColor}) => {
  
  const styling = {
    backgroundColor,
  }
  
  return (
    <div className="color-box" style={styling}>
      <div className="color-box__save-button">
        <div className="save-button__inner-toggle">

        </div>
      </div>
    </div>
  )
}


export default Color;