import React, { useState } from "react";
import "../sass/main.scss";

const colorPalette = {
  0: "$color-orange",
  1: "$color-red",
  2: "$color-purple",
  3: "$color-green",
  4: "$color-blue",
  5: "$color-yellow",
  correct: "$color-correct",
  correctColor: "$color-correct-color",
};

const Peg = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="peg-div">
      <span
        className="peg"
        onClick={() => setIsClicked((prevState) => !prevState)}
      ></span>
      <div
        className="color-chooser"
        style={{
          display: isClicked ? "block" : "none",
        }}
      ></div>
    </div>
  );
};

export default Peg;
