import React, { useState, useEffect } from "react";

function InputTask() {
  const storedItems = JSON.parse(localStorage.getItem("items")) || [];

  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState(storedItems);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  let handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue !== "") {
      // checks if the input is not empty and if enter was clicked
      setItems([...items, inputValue]); // adds input value to items
      setInputValue(""); // clears the input field

      // let inputValue = e.target.value;
      // console.log("You typed", inputValue);
      // e.target.value = "";
    }
  };
  return (
    <div>
      <input
        placeholder="input"
        id="inputField"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}
export default InputTask;
