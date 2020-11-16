import React from "react";
import { v4 as uuidv4 } from "uuid";

const ColorChooser = ({ changeColor, pegs }) => {
  const colorPalette = [
    "#f1a119",
    "#fc5560",
    "#9249b7",
    "#349f34",
    "#92c3ee",
    "#f5e76e",
  ];

  const modifyColorPalette = (pegs) => {
    return colorPalette.filter((color) => !pegs.includes(color));
  };

  return (
    <div className="color-chooser">
      {modifyColorPalette(pegs).map((color) => (
        <div
          key={uuidv4()}
          className="color-to-choose"
          onClick={() => changeColor(color)}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};

export default ColorChooser;
