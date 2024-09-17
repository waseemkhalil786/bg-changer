import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div style={{ background: color }} className="main-div">
      <h1>Background Changer</h1>
      <div className="center-div">
        <div className="navbar">
        <button onClick={() => setColor("red")} style={{background: 'red'}}>Red</button>            
        <button onClick={() => setColor("yellow")} style={{background: 'yellow'}}>Yellow</button>            
        <button onClick={() => setColor("black")} style={{background: 'black' , color: "white"}}>Black</button>            
        <button onClick={() => setColor("blue")} style={{background: 'blue'}}>Blue</button>            
        <button onClick={() => setColor("green")} style={{background: 'green'}}>Green</button>            
        <button onClick={() => setColor("brown")} style={{background: 'brown'}}>Brown</button>            
        <button onClick={() => setColor("purple")} style={{background: 'purple'}}>Purple</button>            
        <button onClick={() => setColor("white")} style={{background: 'white'}}>White</button>            
        <button onClick={() => setColor("olive")} style={{background: 'olive'}}>Olive</button>            
        <button onClick={() => setColor("orange")} style={{background: 'orange'}}>Orange</button>
        </div>
      </div>
    </div>
  );
}

export default App;
