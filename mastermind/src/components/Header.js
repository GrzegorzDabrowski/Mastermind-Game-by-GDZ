import React, { useState } from "react";
import GameRules from "./GameRules";

const Header = ({ clearState, signOut, name, isSigned, saveGame }) => {
  const handleSubmit = () => {
    clearState();
  };

  const handleSignOut = () => {
    signOut();
  };

  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <header className="game-header">
        <h1 className="game-header-title">Mastermind</h1>
      </header>
      <div className="game-info options">
        <span className="game-info-text" onClick={handleSubmit}>
          restart
        </span>
        <span className="game-info-text" onClick={saveGame}>
          save game
        </span>
        <span
          className="game-info-text"
          onClick={() => setIsClicked((prevState) => !prevState)}
        >
          game rules
        </span>
      </div>
      {isClicked && <GameRules />}
      <div className="game-info user">
        <span className="user-name">user: {isSigned ? name : ""}</span>
        <span className="game-info-text" onClick={handleSignOut}>
          sign out
        </span>
      </div>
    </>
  );
};

export default Header;
