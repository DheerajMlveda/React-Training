import React from "react";
import { useState } from "react";

/*
1. empty string and white space string shouldn't be allowed
2. spaces should be trimmed
3. on enter key pressed in input box, it should add the todo
*/

export default function ToDoList() {
  const [listEl, setListEl] = useState(``);
  const [work, setWork] = useState([]);
  function updateList(e) {
    e.preventDefault();
    
    if (listEl.trim() !== "") setWork((arr) => [...arr, listEl.trim()]);
    setListEl("");
  }
  function changeText(event) {
    setListEl(event.target.value);
  }

  return (
    <div>
      <h1>Hii</h1>
      Enter Some Text :{" "}
      <form>
        <input
          placeholder="Enter your work"
          id="in"
          value={listEl}
          onChange={(e) => changeText(e)}
          type="text"
        />
        <button id="btn" onClick={(e) => updateList(e)}>
          Add To List
        </button>
      </form>
      <hr />
      <ul id="ul">
        Your Todo list is Here
        {work.map((element) => {
          return <li>{element}</li>;
        })}
      </ul>
    </div>
  );
}
