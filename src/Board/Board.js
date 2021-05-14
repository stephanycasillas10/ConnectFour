import "./Boardstyles.css";
import React, { useState } from "react";
import Circle from "../Circle/Circle";

const Board = () => {
  const spaceState = { fillColor: "" };
  const createBoard = () => {
    const columns = new Array(6).fill(spaceState);
    const connect4BoardArr = columns.map((row) =>
      new Array(7).fill(spaceState)
    );
    return connect4BoardArr;
  };
  const handleClick = (row, column) => {
    const connect4Boardcopy = [...connect4Board];
    connect4Boardcopy[row][column] = { fillColor: "blue" };
    setConnect4Board(connect4Boardcopy);
  };
  const [connect4Board, setConnect4Board] = useState(createBoard());
  return (
    <>
      {connect4Board.map((row, rowIndex) => (
        <div className="row">
          {row.map((circle, columnIndex) => (
            <Circle
              handleClick={handleClick}
              row={rowIndex}
              column={columnIndex}
              fillColor={connect4Board[rowIndex][columnIndex].fillColor}
              className="circle"
            />
          ))}
        </div>
      ))}
    </>
  );
};
export default Board;