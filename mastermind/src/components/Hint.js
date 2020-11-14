import React from "react";

const Hint = (props) => {
  console.log(props.hint);
  return <span className={`hint ${props.hint}`}></span>;
};

export default Hint;
