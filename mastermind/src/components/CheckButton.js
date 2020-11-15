import React, { useState } from "react";

const CheckButton = ({ checkRow, rowIndex, isCompleted }) => {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <div
      className="check-button"
      style={{ display: isClicked ? "flex" : "none" }}
      onClick={() => {
        setIsClicked((prevState) => !prevState);
        checkRow(rowIndex);
      }}
    >
      check
    </div>
  );
};

export default CheckButton;
