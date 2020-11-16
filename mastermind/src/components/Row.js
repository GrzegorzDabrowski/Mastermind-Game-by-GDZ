import React, { useState } from "react";
import Peg from "./Peg";
import Hint from "./Hint";
import CheckButton from "./CheckButton";

const Row = ({
  pegs,
  hints,
  isCompleted,
  checkRow,
  rowIndex,
  changeColor,
  isCurrent,
}) => {
  const [isFilled, setIsFilled] = useState(false);

  if (pegs.every((peg) => peg !== false) && isFilled === false) {
    setIsFilled(true);
  }
  return (
    <div className="row">
      <div
        className="row-pegs"
        style={{
          borderBottom: isCurrent ? "2px solid rgb(105, 92, 92)" : null,
        }}
      >
        {pegs.map((peg, i) => {
          return (
            <Peg
              key={i}
              pegIndex={i}
              pegs={pegs}
              rowIndex={rowIndex}
              color={peg}
              changeColor={changeColor}
              isCurrent={isCurrent}
            />
          );
        })}
      </div>
      {isFilled && (
        <CheckButton
          rowIndex={rowIndex}
          checkRow={checkRow}
          isCompleted={isCompleted}
        />
      )}
      <div className="row-hints">
        {hints.map((hint, i) => {
          return (
            <Hint
              key={i}
              hintIndex={i}
              rowIndex={rowIndex}
              isCurrent={isCurrent}
              hint={hint}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
