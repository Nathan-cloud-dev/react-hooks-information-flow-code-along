import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, childrenColor }) {
  function handChildColorChange() {
    const newColor = getRandomColor();
    onChangeColor(newColor)
  }

  return <div className="child" style={{ backgroundColor: childrenColor }} onClick={handChildColorChange}/>;
}

export default Child;