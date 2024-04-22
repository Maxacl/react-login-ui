import React, {useState} from "react";

function App() {
  // const [hoverEffect, setHoverEffect] = useState(false);
  const [headingText, setHeadingText] = useState("");
  const [userName, setUserName] = useState("");

  function handleInput(event) {
    setUserName(event.target.value)
    console.log(`This is the event.target.value: ${event.target.value}`)
    console.log(`This is the userName: ${userName}`);
  };

  function handleClick() {
    setHeadingText(userName);
    console.log(`This is the userName when clicked: ${userName}`)
  };


  // function handleMouseOver() {
  //   setHeadingText("You've hovered over Submit!");
  //   setHoverEffect(true);
  // };

  // function handleMouseOut() {
  //   setHoverEffect(false);
  // };


  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      
      <input 
      onChange={handleInput} 
      type="text" 
      placeholder="What's your name?" 
      value={userName}
      />

      <button 
      onClick={handleClick} 
      // onMouseOver={handleMouseOver} 
      // onMouseOut={handleMouseOut} 
      // style={{backgroundColor: hoverEffect ? "#ffffffaf" : "white"}}
      >
        Submit
      </button>

    </div>
  );
}

export default App;
