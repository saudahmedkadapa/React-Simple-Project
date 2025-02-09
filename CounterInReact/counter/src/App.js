import React,{useState} from 'react';
import './App.css';

function App() {
  const[count,setcount]=useState(10);

  const add=()=>{
    setcount(prevCount=>prevCount+1);
    setcount(prevCount=>prevCount+1);
    setcount(prevCount=>prevCount+1);
    setcount(prevCount=>prevCount+1);
  };

  const sub=()=>{
    setcount(prevCount=>prevCount-1);
  }
  return (

    
    <div className="App">
      <h1> Counter {count}</h1>
        <button className="btn" onClick={add}>increase</button>
        <button className="btn" onClick={sub}>Decrease</button>
    </div>
  );
}

export default App;
