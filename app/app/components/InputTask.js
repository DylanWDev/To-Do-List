import React from "react";

function InputTask() {
  let handleKeyDown = (e) => {
    if (e.key === "Enter") {
      let inputValue = e.target.value;
      console.log("You typed", inputValue);
      e.target.value = "";
    }
  };
  return <input id="inputField" onKeyDown={handleKeyDown} />;
}
export default InputTask;
