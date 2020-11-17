import React from "react";

const GameRules = () => {
  return (
    <div className="game-rules">
      <p>
        There is a secret code of four different colors. <br /> Try to guess the
        pattern within ten turns. <br /> Check a row to see hints on the right:
        <br /> red for correct color, green one for correct color in a correct
        position.
      </p>
    </div>
  );
};

export default GameRules;
