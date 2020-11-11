import React, { useState } from "react";
import "../sass/main.scss";
import ColorChooser from "./ColorChooser";

const Peg = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="peg-div">
      <span
        className="peg"
        onClick={() => setIsClicked((prevState) => !prevState)}
      ></span>
      <ColorChooser
        style={{
          display: isClicked ? "block" : "none",
        }}
      />
    </div>
  );
};

export default Peg;
