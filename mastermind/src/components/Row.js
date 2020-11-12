import React from "react";
import Peg from "./Peg";
import Hint from "./Hint";

const Row = ({
  pegs,
  hints,
  isCompleted,
  rowIndex,
  changeColor,
  isCurrent,
}) => {
  return (
    <div className="row">
      <div className="row-pegs">
        {pegs.map((peg, i) => {
          return (
            <Peg
              key={i}
              pegIndex={i}
              rowIndex={rowIndex}
              color={peg}
              changeColor={changeColor}
              isCurrent={isCurrent}
            />
          );
        })}
      </div>
      <div className="row-hints">
        {hints.map((hint, i) => {
          return (
            <Hint
              key={i}
              hintIndex={i}
              rowIndex={rowIndex}
              isCurrent={isCurrent}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
