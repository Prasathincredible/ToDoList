import React from 'react'

function ProductCategoryRow({category}) {
  return (

    <tr>
        <th colspan="2">
            {category}
        </th>
    </tr>
  
  );
}

export default ProductCategoryRow