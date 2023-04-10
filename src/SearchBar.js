import React from "react";

function SearchBar(props) {
  return (
    <form>
      <input
        onChange={props.onChange}
        value={props.value}
        type="text"
        placeholder="Search here....."
      />
      <br />
      <input
        onClick={props.onClick}
        value={props.isChecked}
        type="checkbox"
        placeholder="Search here....."
      />{" "}
      Show items in stock only
    </form>
  );
}

export default SearchBar;
