import React, { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";

function InputTask() {
  const storedItems = JSON.parse(localStorage.getItem("items")) || []; // get stored items from localStorage or initialize an empty array

  const [inputValue, setInputValue] = useState(""); // State to manage the current input value
  const [items, setItems] = useState(storedItems); // State to manage the list of items, initialized with stored items
  const [selectedItems, setSelectedItems] = useState([]); //store selected items in array

  useEffect(() => {  // useEffect to update localStorage when 'items' state changes
    localStorage.setItem("items", JSON.stringify(items));  // Store the 'items' state in localStorage as a JSON string
  }, [items]);

  let handleKeyDown = (e) => { // Event handler to handle the Enter key press
    if (e.key === "Enter" && inputValue !== "") {  // Check if the Enter key is pressed and the input is not empty

      setItems([...items, inputValue]); // adds input value to items
      setInputValue(""); // clears the input field
    }
  };

  const toggleSelect = (index) => {
    // Toggle selection of the item at the specified index
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(index)) {
        return prevSelectedItems.filter((item) => item !== index);
      } else {
        return [...prevSelectedItems, index];
      }
    });
  };

  const deleteSelectedItems = () => {
    // Create a new array without the selected items
    const updatedItems = items.filter((_, index) => !selectedItems.includes(index));
    setItems(updatedItems);
    setSelectedItems([]); // Clear selected items
  };

  return (
    <div>
      <input
        placeholder="input"
        id="inputField"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={selectedItems.includes(index)}
              onChange={() => toggleSelect(index)}
            />
            {item}
          </div>
        ))}
      </div>
      {selectedItems.length > 0 && (
        <button onClick={deleteSelectedItems}>Delete Selected</button>
      )}
    </div>
  );
}
export default InputTask;
