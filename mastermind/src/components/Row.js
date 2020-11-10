import React from "react";
import "../sass/main.scss";

const Row = () => {
  return (
    <div className="row">
      <div className="row-pegs">
        <span className="peg"></span>
        <span className="peg"></span>
        <span className="peg"></span>
        <span className="peg"></span>
      </div>
      <div className="row-hints">
        <span className="hint"></span>
        <span className="hint"></span>
        <span className="hint"></span>
        <span className="hint"></span>
      </div>
    </div>
  );
};

export default Row;
