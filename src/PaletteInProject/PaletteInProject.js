import React from "react";
import "./PaletteInProject.scss";
import deleteBtn from '../utils/images/trash-alt-regular.svg'

const PaletteInProject = ({ id, color1, color2, color3, color4, color5, deletePalette }) => {

  return (
    <section>
      <div
        className="color1-box all-colors"
        style={{ backgroundColor: color1 }}
      >
        <img 
          className='delete-btn' 
          onClick={() => deletePalette(id)}
          src={deleteBtn}
        />
      </div>
      <div
        className="color2-box all-colors"
        style={{ backgroundColor: color2 }}
      ></div>
      <div
        className="color3-box all-colors"
        style={{ backgroundColor: color3 }}
      ></div>
      <div
        className="color4-box all-colors"
        style={{ backgroundColor: color4 }}
      ></div>
      <div
        className="color5-box all-colors"
        style={{ backgroundColor: color5 }}
      ></div>
    </section>
  );
};

export default PaletteInProject;
