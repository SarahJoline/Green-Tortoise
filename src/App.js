import "./App.css";
import Canvas from "./Canvas";

function App() {
  return (
    <div className="App">
      <Canvas
        width="500"
        height="500"
        style={{ border: "2px solid #228B22" }}
      />
    </div>
  );
}

export default App;
