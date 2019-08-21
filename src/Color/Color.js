import React from 'react'
import './Color.scss'

const Color = ({backgroundColor}) => {
  
  const styling = {
    backgroundColor,
  }
  
  return (
    <div className="color-box" style={styling}>
    
    </div>
  )
}


export default Color;