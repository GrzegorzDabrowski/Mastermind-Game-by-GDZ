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
      hints: [false, false, false, false],
      isCompleted: false,
      isCurrent: i === 0,
    });
  }

  const [rows, setRows] = useState(tmp);

  const changeColor = (pegIndex, rowIndex, color) => {
    const tmpRows = JSON.parse(JSON.stringify(rows));
    tmpRows[rowIndex].pegs[pegIndex] = color;
    setRows(tmpRows);
  };

  const colors = [
    "#f1a119",
    "#fc5560",
    "#9249b7",
    "#349f34",
    "#92c3ee",
    "#f5e76e",
  ];

  const [secretCode, setSecretCode] = useState(
    [...new Array(4)].map((color) => {
      const random = Math.floor(Math.random() * Math.floor(colors.length));
      return colors[random];
    })
  );

  const checkRow = (rowIndex) => {
    tmpRows[rowIndex].pegs.forEach((peg, index) => {
      if (secretCode.includes(peg)) {
        if (secretCode.indexOf(peg) === index) {
          tmpRows[rowIndex].hints[index] = "correct color position";
        } else {
          tmpRows[rowIndex].hints[index] = "correct color";
        }
      }
    });
  };

  return (
    <section className="game-container">
      <Header />
      {rows.map((row, i) => {
        return <Row key={i} rowIndex={i} changeColor={changeColor} {...row} />;
      })}
      <SecretCode code={secretCode} />
    </section>
  );
}

export default App;
