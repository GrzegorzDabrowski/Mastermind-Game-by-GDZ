import React from "react";
import "../sass/main.scss";
import Peg from "./Peg";

const Row = () => {
  return (
    <div className="row">
      <div className="row-pegs">
        <Peg />
        <Peg />
        <Peg />
        <Peg />
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
