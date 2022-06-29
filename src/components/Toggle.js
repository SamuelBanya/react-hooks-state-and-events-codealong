import React, { useState } from "react";

function Toggle() {
  // NOTE: You NEED to make sure that the 'useState' variable and corresponding function
  // are accessible by putting it in the 'top level' of the function itself
  const [isOn, setIsOn] = useState(false);

  function changeButtonState() {
    console.log("changeButtonState() call back function called");

    console.log("isOn: ");
    console.log(isOn);

    setIsOn((isOn) => !isOn);

    // Initial attempt using a 'ternary' expression:
    // setIsOn({isOn ? "ON" : "OFF"});

    // Second attempt:
    // return isOn ? "ON" : "OFF";
  }

  const backgroundColor = isOn ? "green" : "red";

  return (
    <button style={{ background: backgroundColor }} onClick={changeButtonState}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
