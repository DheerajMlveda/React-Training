import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

    
  

function FilterableProducts(props) {
  const filterText = props.text;
  const inStockOnly = props.stockOnly;

  const rows = [];
  let lastCategory = null;

  props.products.forEach((product) => {
    if (!product.name.toLowerCase().startsWith(filterText.toLowerCase()))
      return;

    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default FilterableProducts;
