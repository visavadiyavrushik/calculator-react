import "./App.css";
import { useState } from "react";


function App() {
const [calc,setCalc] = useState("")
const [result, setResult] = useState('');


const ops = ['/','*','-','+','.'];

const updateCalc = value => {
  setCalc(calc + value)
}

  const createDigits = () => {
    const digits = [];
      for (let i = 0; i < 10; i++) {
        digits.push(
          <button onClick={updateCalc()} key={i}>{i}</button>
        )
    }
    return digits;
  }

  return (
    <div className="app">
      <div className="calculator">
        <div className="display">
          {result ? <span>(0)</span> : ""}
          {calc || "0" }
        </div>

        <div className="operators">
          <button onClick={updateCalc("/")}>/</button>
          <button onClick={updateCalc("*")}>*</button>
          <button onClick={updateCalc("+")}>+</button>
          <button onClick={updateCalc("-")}>-</button>

          <button>DEL</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={updateCalc("0")}>0</button>
          <button onClick={updateCalc(".")}>.</button>
          <button onClick={updateCalc("=")}>=</button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
