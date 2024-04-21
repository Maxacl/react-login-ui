import React, {useState} from "react";

function App() {

  const lightBlue = "#add8e6";

  const [hoverEffect, setHoverEffect] = useState(false);
  const [headingText, setHeadingText] = useState("Hello There!");

  function handleClick() {
    setHeadingText("Submitted!");
  };

  function handleMouseOver() {
    console.log("You're Logged In");
    setHeadingText("You've hovered over Submit!");
    setHoverEffect(true);
  };

  function handleMouseOut() {
    setHeadingText("But now you're not hovering..")
    setHoverEffect(false);
  };

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      onClick={handleClick} 
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut} 
      style={{backgroundColor: hoverEffect ? "#ffffffaf" : "white"}}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
