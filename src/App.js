import "./styles.css";
import React, { useState } from "react";
import Board from "./Board/Board";
const spaceState = {};
const columns = new Array(6).fill(spaceState);
const connect4BoardArr = columns.map((row) => new Array(7).fill(spaceState));
export default function App() {
  
  return (
    <div className="App">
      <h1> Connect Four </h1>
      <Board />
    </div>
  );
}
