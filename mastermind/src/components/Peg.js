import React, { useState } from "react";
import ColorChooser from "./ColorChooser";

const Peg = ({ color, pegs, pegIndex, rowIndex, changeColor, isCurrent }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleChangeColor = (color) => {
    setIsClicked(false);
    changeColor(pegIndex, rowIndex, color);
  };

  return (
    <div className="peg-div">
      <span
        className="peg"
        onClick={() => setIsClicked((prevState) => !prevState)}
        style={{
          backgroundColor: color ? color : undefined,
          cursor: isCurrent ? "pointer" : null,
          border: isCurrent
            ? "4px solid rgb(105, 92, 92)"
            : "2px solid rgb(105, 92, 92)",
        }}
      ></span>
      {isClicked && isCurrent && (
        <ColorChooser pegs={pegs} changeColor={handleChangeColor} />
      )}
    </div>
  );
};

export default Peg;
