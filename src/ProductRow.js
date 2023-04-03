import React from "react";

function ProductRow(props) {
  const product = props.product;
  // const name = ;
  return (
    <tr>
      <td>
        {product.stocked ? (
          product.name
        ) : (
          <span style={{ color: "red" }}>{product.name}</span>
        )}
      </td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
