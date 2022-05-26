import React from "react";
import "./App.css";

function App() {
  const one = function show1() {
    document.getElementById("div1").style.display = "none";
  };
  const two = function show2() {
    document.getElementById("div1").style.display = "block";
  };
  return (
    <div>
      <p>How many check boxes do you want when clicked on a radio button?</p>
      <input type="radio" name="tab" value="igotnone" onClick={one} />
      None
      <input type="radio" name="tab" value="igottwo" onClick={two} />
      Two
      <div id="div1" className="hide">
        <hr />
        <p>Okay Cool! Here are those two...</p>
        <input type="checkbox" value="Yes" name="one" />
        One &nbsp;
        <input type="checkbox" value="Yes" name="two" />
        Two
      </div>
    </div>
  );
}

export default App;
