import React, { useState } from "react";
import SearchBar from "./SearchBar";
import FilterableProducts from "./FilterableProducts";

function ProductTable(props) {
  const [searchText, setSearchText] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const onChange = (event) => {
    setSearchText(event.target.value);
  };

  const checking = (event) => {
    setIsChecked(!event.target.checked);
  };

  return (
    <div>
      <SearchBar
        value={searchText}
        checking={isChecked}
        onClick={checking}
        onChange={onChange}
      />
      <FilterableProducts
        stockOnly={!isChecked}
        products={props.products}
        text={searchText}
      />
    </div>
  );
}

export default ProductTable;
