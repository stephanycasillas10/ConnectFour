import "./styles.css";
import Circle from "./Circle/Circle";
export default function App() {
  const arr = [[]];
  var x = new Array(10);

  for (var i = 0; i < x.length; i++) {
    x[i] = new Array(3);
  }
  return (
    <div className="App">
      <div className="circle"> </div>
      <div className="grid"> </div>
      <div className="header">
        <h1>Connect Four</h1>
      </div>
      {arr.map((column) => column.map((row) => <Circle />))}
    </div>
  );
}
