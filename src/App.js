import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [ count, setCount ] = useState(0);
  const [ email, setEmail ] = useState("");

  const updateEmail = e => {
    const {
      target: {value}
    } = e;
    setEmail(value);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={ () => setCount(count + 1)}> Add </button>
      <button onClick={ () => setCount(count - 1)}> Minus</button>
      <input placeholder="Email" value={email} onChange={updateEmail}/>
    </div>
    
  );
}

export default App;
