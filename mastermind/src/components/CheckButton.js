import React, { useState } from "react";

const CheckButton = ({ checkRow, rowIndex }) => {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <div
      className="check-button"
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
