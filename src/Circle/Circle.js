import React from "react";
const Circle = ({ fillColor, row, column, handleClick }) => {
  return (
    <div
      className="circle"
      onClick={() => handleClick(row, column)}
      style={{ backgroundColor: fillColor }}
    ></div>
  );
};
export default Circle;
