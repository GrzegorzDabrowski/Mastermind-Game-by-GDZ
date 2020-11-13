import React, { useState } from "react";

const CheckButton = () => {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <div
      className="check-button"
      onClick={() => setIsClicked((prevState) => !prevState)}
    >
      check
    </div>
  );
};

export default CheckButton;
