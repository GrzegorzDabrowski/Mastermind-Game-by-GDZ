import React from "react";
import "../sass/main.scss";

const Header = () => {
  return (
    <>
      <header className="game-header">
        <h1 className="game-header-title">Mastermind</h1>
      </header>
      <div className="game-info">
        <span className="restart">restart</span>
        <span className="user-name">user:</span>
      </div>
    </>
  );
};

export default Header;
