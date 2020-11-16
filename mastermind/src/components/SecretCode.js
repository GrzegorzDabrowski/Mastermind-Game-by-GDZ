import React from "react";
import "../sass/main.scss";

const SecretCode = ({ code, isGameFinished }) => {
  return (
    <div className="row secret-code">
      <div className="row-pegs row-secret">
        {code.map((item) => {
          return (
            <span className="peg" style={{ backgroundColor: item }}></span>
          );
        })}
      </div>
      {isGameFinished === false && <div className="code-hide">secret code</div>}
    </div>
  );
};

export default SecretCode;
