// class ProductCategoryRow extends React.Component {
//     render() {
//       const category = this.props.category;
//       return (
//         <tr>
//           <th colSpan="2">
//             {category}
//           </th>
//         </tr>
//       );
//     }
//   }




import React from 'react'

function ProductCategoryRow(props) {


    const category = props.category;
  return (
    <td style={{fontWeight:"bold", fontSize:'1.2rem'}}>
        {category}
    </td>
  )
}

export default ProductCategoryRow