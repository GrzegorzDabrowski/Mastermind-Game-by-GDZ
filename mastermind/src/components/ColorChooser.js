import React from "react";
import "../sass/main.scss";

const colorPalette = [
  "#f1a119",
  "#fc5560",
  "#9249b7",
  "#349f34",
  "#92c3ee",
  "#f5e76e",
];

const ColorChooser = ({ style }) => {
  const colorToChoose = (index) => {
    return (
      <div
        className="color-to-choose"
        style={{ backgroundColor: colorPalette[index] }}
      ></div>
    );
  };

  return (
    <div className="color-chooser" style={style}>
      <div>
        {colorToChoose(0)}
        {colorToChoose(1)}
        {colorToChoose(2)}
      </div>
      <div>
        {colorToChoose(3)}
        {colorToChoose(4)}
        {colorToChoose(5)}
      </div>
    </div>
  );
};

export default ColorChooser;
