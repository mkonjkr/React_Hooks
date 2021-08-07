'use Strict'
import React, { StrictMode, useState } from "react";
import "./App.css";


// Contents Array
const contents = [
  {
    tab: "Section 1",
    content: "Content of Section 1"
  },
  {
    tab: "Section 2",
    content: "Content of Section 2"
  }
];

const useTab = (initialValue, currentArray) => {
  const [ currentIndex, setCurrentIdex ] = useState(initialValue);

  if(!currentArray || !Array.isArray(currentArray)){
    return ;
  }

  return {
    currentItem: currentArray[currentIndex],
    changeItem: setCurrentIdex
  }
}

const App = () => {
  const {currentItem, changeItem} = useTab(0, contents);
  return(
    <div>
      <p> Practice of useState #2 </p>
      { contents.map( (section, index) => (
        <button onClick ={ () => changeItem(index)}> {section.tab}</button>
      ))}
      <p>{currentItem.content}</p>
    </div>
  )
}

export default App;
