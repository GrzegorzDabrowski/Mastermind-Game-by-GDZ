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

  return (
    <section className="game-container">
      <Header />
      {rows.map((row, i) => {
        return <Row key={i} rowIndex={i} changeColor={changeColor} {...row} />;
      })}
      <SecretCode />
    </section>
  );
}

export default App;
