import React from "react";

const WelcomePage = () => {
  return (
    <div className="welcome">
      <div className="welcome-page-overlay"></div>
      <div className="welcome-page">
        <h2 className="welcome-page-title">Welcome to Mastermind</h2>
        <p className="welcome-page-text">Sign in and break the secret code!</p>
        <div>
          <input
            className="welcome-page-input"
            type="text"
            name="name"
            id="name"
            placeholder="write down your name"
          />
          <button
            className="welcome-page-btn"
            type="submit"
            id="welcome-page-btn"
          >
            Sign In!
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
