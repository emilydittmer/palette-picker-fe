import React from 'react'
import './Color.scss'

const Color = ({backgroundColor, index, handleLockColor}) => {
  
  const styling = {
    backgroundColor: `#${backgroundColor}`,
    animationDelay: `${index * 500}ms`
  }
  
  return (
    <div className="color-box"   style={styling}>
        <input 
          type='checkbox' 
          data-on="Lock" 
          data-off="Unlock" 
          className="color-box__save-button"
          onClick={() => handleLockColor(index)}
          />
    </div>
  )
}


export default Color;