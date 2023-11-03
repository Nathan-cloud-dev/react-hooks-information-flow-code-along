import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF");
  
  function handleColorChange(newRandomChildColor) {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
    setChildrenColor(newRandomChildColor)
  }


  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleColorChange} childrenColor={childrenColor}/>
      <Child onChangeColor={handleColorChange} childrenColor={childrenColor}/>
    </div>
  );
}

export default Parent;