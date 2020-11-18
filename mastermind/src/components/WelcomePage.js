import React from "react";

const WelcomePage = ({ name, setName, setIsSigned }) => {
  const onSubmitName = () => {
    localStorage.setItem("savedName", name);

    if (name.length < 1) {
      alert("Enter your name :)");
      setIsSigned(false);
    } else {
      setIsSigned(true);
    }
  };

  return (
    <div className="welcome">
      <div className="welcome-page-overlay"></div>
      <div className="welcome-page">
        <h2 className="welcome-page-title">Welcome to Mastermind</h2>
        <p className="welcome-page-text">Sign in and break the secret code!</p>
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="welcome-page-input"
            type="text"
            name="name"
            id="name"
            placeholder="write down your name"
          />
          <button
            onClick={onSubmitName}
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
