import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";


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
    <div className="container p-0 d-flex flex-column align-items-center justify-content-center h-100">
      <div className="text-left w-100 border border-3 border-top-0 border-start-0 border-end-0 border-secondary">
      <input
        className="w-100 border-0"
        placeholder="add items to list"
        id="inputField"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      </div>
      <div className="overflow-auto w-100" >
        {items.map((item, index) => (
          <div id="listItem" className="border border-secondary border-3 border-top-0 border-end-0 border-start-0" key={index}>
            <input
              
              type="checkbox"
              autoComplete="off"
              checked={selectedItems.includes(index)}
              onChange={() => toggleSelect(index)}
            />
            {item}
          </div>
        ))}
      </div >
        
          <button className="border-0 mt-auto text-center" onClick={deleteSelectedItems}>Delete Selected</button>
      
    </div>
  );
}
export default InputTask;
