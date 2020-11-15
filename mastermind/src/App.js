import React, { useState } from "react";
import "./sass/main.scss";
import Header from "./components/Header";
import Row from "./components/Row";
import SecretCode from "./components/SecretCode";

function App() {
  const tmp = [];
  for (let i = 0; i < 10; i++) {
    tmp.push({
      pegs: [false, false, false, false],
      hints: ["", "", "", ""],
      isCompleted: false,
      isCurrent: i === 0,
    });
  }

  const [rows, setRows] = useState(tmp);

  const changeColor = (pegIndex, rowIndex, color) => {
    const tmp = [...rows];
    // const tmpRows = JSON.parse(JSON.stringify(rows));
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
    } else if (rowIndex === 9) {
      alert("Game Over!");
      // <div className="code-hide" style={{ display: "none" }}></div>;
    }

    if (tmpRows[rowIndex].hints.every((hint) => hint === "correctPosition")) {
      alert("Congratulations! You broke the code!");
      tmpRows[rowIndex].isCompleted = true;
      tmpRows[rowIndex + 1].isCurrent = false;
    }

    setRows(tmpRows);
  };

  return (
    <section className="game-container">
      <Header />
      {rows.map((row, i) => {
        return (
          <Row
            key={i}
            rowIndex={i}
            checkRow={checkRow}
            changeColor={changeColor}
            {...row}
          />
        );
      })}
      <SecretCode code={secretCode} />
    </section>
  );
}

export default App;
