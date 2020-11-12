import React, { useState } from "react";

const ColorChooser = ({ changeColor }) => {
  const colorPalette = [
    "#f1a119",
    "#fc5560",
    "#9249b7",
    "#349f34",
    "#92c3ee",
    "#f5e76e",
  ];

  return (
    <div className="color-chooser">
      {colorPalette.map((color) => (
        <div
          className="color-to-choose"
          onClick={() => changeColor(color)}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};

export default ColorChooser;
