import React, { useState } from "react";
import ColorChooser from "./ColorChooser";

const Peg = ({ color, pegIndex, rowIndex, changeColor, isCurrent }) => {
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
        }}
      ></span>
      {isClicked && isCurrent && (
        <ColorChooser changeColor={handleChangeColor} />
      )}
    </div>
  );
};

export default Peg;
