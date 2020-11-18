import React, { useState, useEffect } from "react";
import "./sass/main.scss";
import Header from "./components/Header";
import Row from "./components/Row";
import SecretCode from "./components/SecretCode";
import WelcomePage from "./components/WelcomePage";
import { v4 as uuidv4 } from "uuid";

function App() {
  const tmp = [];
  for (let i = 0; i < 10; i++) {
    tmp.push({
      id: uuidv4(),
      pegs: [false, false, false, false],
      hints: ["", "", "", ""],
      isCompleted: false,
      isCurrent: i === 0,
    });
  }

  const [rows, setRows] = useState(tmp);

  const [name, setName] = useState("");

  const [isSigned, setIsSigned] = useState(true);

  const saveGame = () => {
    console.log(rows);
    localStorage.setItem("savedGame", JSON.stringify(rows));
    localStorage.setItem("savedSecretCode", JSON.stringify(secretCode));
  };

  // is name saved
  useEffect(() => {
    let savedName = localStorage.getItem("savedName");

    if (savedName) {
      setIsSigned(true);
      setName(savedName);
    } else {
      setIsSigned(false);
    }

    let savedGame = JSON.parse(localStorage.getItem("savedGame"));
    let savedSecretCode = JSON.parse(localStorage.getItem("savedSecretCode"));

    if (savedGame) {
      setRows(savedGame);
      setSecretCode(savedSecretCode);
    }
  }, []);

  const changeColor = (pegIndex, rowIndex, color) => {
    const tmp = [...rows];
    tmp[rowIndex].pegs[pegIndex] = color;
    setRows(tmp);
  };

  const codeGenerator = () => {
    let colors = [
      "#f1a119",
      "#fc5560",
      "#9249b7",
      "#349f34",
      "#92c3ee",
      "#f5e76e",
    ];

    return [...new Array(4)].map((color) => {
      const random = Math.floor(Math.random() * colors.length);

      const selectedColor = colors[random];

      colors = colors.filter((color) => color !== selectedColor);

      return selectedColor;
    });
  };

  const [secretCode, setSecretCode] = useState(codeGenerator());
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isGameFailed, setIsGameFailed] = useState(false);

  const checkRow = (rowIndex) => {
    const tmpRows = JSON.parse(JSON.stringify(rows));

    tmpRows[rowIndex].pegs.forEach((peg, index) => {
      if (secretCode.includes(peg)) {
        //
        if (secretCode.indexOf(peg) === index) {
          tmpRows[rowIndex].hints[index] = "correctPosition";
        } else {
          tmpRows[rowIndex].hints[index] = "correctColor";
        }
      }
    });

    tmpRows[rowIndex].isCompleted = true;
    tmpRows[rowIndex].isCurrent = false;
    if (rowIndex < 9) {
      tmpRows[rowIndex + 1].isCurrent = true;
    } else if (
      rowIndex === 9 &&
      tmpRows[rowIndex].hints.some((hint) => hint !== "correctPosition")
    ) {
      setIsGameFailed(true);
    }

    if (
      rowIndex < 9 &&
      tmpRows[rowIndex].hints.every((hint) => hint === "correctPosition")
    ) {
      tmpRows[rowIndex].isCompleted = true;
      tmpRows[rowIndex + 1].isCurrent = false;
      setIsGameFinished(true);
    } else if (
      rowIndex === 9 &&
      tmpRows[rowIndex].hints.every((hint) => hint === "correctPosition")
    ) {
      tmpRows[rowIndex].isCompleted = true;
      setIsGameFinished(true);
    }

    setRows(tmpRows);

    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }

    shuffle(tmpRows[rowIndex].hints);
  };

  const clearState = () => {
    setRows(tmp);
    setSecretCode(codeGenerator());
    setIsGameFinished(false);
    setIsGameFailed(false);
    localStorage.removeItem("savedGame");
    localStorage.removeItem("savedSecretCode");
  };

  const signOut = () => {
    setRows(tmp);
    setSecretCode(codeGenerator());
    setIsGameFinished(false);
    setIsGameFailed(false);
    localStorage.clear();
  };

  return (
    <section className="game-container">
      {!isSigned && (
        <WelcomePage
          name={name}
          setName={setName}
          isSigned={isSigned}
          setIsSigned={setIsSigned}
        />
      )}
      <Header
        signOut={signOut}
        clearState={clearState}
        name={name}
        isSigned={isSigned}
        saveGame={saveGame}
      />
      {rows.map((row, i) => {
        return (
          <Row
            key={row.id}
            rowIndex={i}
            checkRow={checkRow}
            changeColor={changeColor}
            {...row}
          />
        );
      })}
      {isGameFinished && (
        <p className="end-game">Congratulations! You broke the code!</p>
      )}
      {isGameFailed && <p className="end-game game-over">Game Over!</p>}
      <SecretCode
        isGameFinished={isGameFinished}
        isGameFailed={isGameFailed}
        code={secretCode}
      />
    </section>
  );
}

export default App;
