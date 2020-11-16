import React from "react";

const Header = ({ clearState }) => {
  const handleSubmit = () => {
    clearState();
  };
  return (
    <>
      <header className="game-header">
        <h1 className="game-header-title">Mastermind</h1>
      </header>
      <div className="game-info">
        <span className="restart" onClick={handleSubmit}>
          restart
        </span>
        <span className="user-name">user:</span>
      </div>
    </>
  );
};

export default Header;
