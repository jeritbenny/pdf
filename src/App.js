// import { useState } from "react";
import "./App.css";
import Pdf from "./Pdf";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Recipt from "./Recipt";

function App() {
  // const[counter,setCounter]=useState(0)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Pdf/>}/>
          <Route path="/recipt" element={<Recipt/>}/>
        </Routes>
          </Router>
     
      {/* <h1>Counter</h1>
      <button onClick={()=>setCounter(counter+1)}>+</button>
      <input type="text" value={counter}></input>
      <button onClick={()=>setCounter(counter-1 )}>-</button> */}
    </div>
  );
}

export default App;
