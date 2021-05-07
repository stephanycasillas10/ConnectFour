import "./styles.css";
import React, { useState } from "react";
const spaceState = {};
const columns = new Array(6).fill(spaceState);
const connect4BoardArr = columns.map((row) => new Array(7).fill(spaceState));
export default function App() {
  const [connect4Board, setConnect4Board] = useState(connect4BoardArr);
  const handleClick =(event) => (event.target.innerText) ="x";

  return (
    <div className="App" onClick={handleClick}>
      <h1> Connect Four </h1>
      {connect4Board.map((row) => (
        <div className="row">
          {row.map((circle) => (
            <div className="circle" />
          ))}
        </div>
      ))}
    </div>
  );
}


  

