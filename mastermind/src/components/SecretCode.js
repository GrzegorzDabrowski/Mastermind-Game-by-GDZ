import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../sass/main.scss";

const SecretCode = ({ code, isGameFinished, isGameFailed }) => {
  return (
    <div className="row secret-code">
      <div className="row-pegs row-secret">
        {code.map((item) => {
          return (
            <span
              key={uuidv4()}
              className="peg"
              style={{ backgroundColor: item }}
            ></span>
          );
        })}
      </div>
      {isGameFinished === false && isGameFailed === false && (
        <div className="code-hide">secret code</div>
      )}
    </div>
  );
};

export default SecretCode;
