'use Strict'
import React, { useState, useEffect } from "react";

const useTitle = initialValue =>{
    
  const [title, setTitle] = useState(initialValue)

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }

  useEffect(updateTitle, [title]);
  return setTitle;
}

const App = () => {

  const titleUpdater = useTitle("Loading...");
  setTimeout( () => titleUpdater("Home"), 3000);

  return (

    <div>
      <p>Pracitce of useEffect #1</p>
    </div>
  )
}

export default App;
