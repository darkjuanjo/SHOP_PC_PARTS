import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../utils/queries';
import Product from '../Product/Product.js';
import CategoryOptions from "../SetCategory/index.js";

function Items(props) {
  const [currentCategory, setCurrentCategory] = useState('');
  const { onAdd } = props;
  const { loading, data } = useQuery(QUERY_ITEMS);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  const products = data.items;

  const currentProducts = products.filter((selection) => selection.category === currentCategory);

  return (
    <div>

      <div>
        <h2>Search by Category</h2>
        <CategoryOptions setCurrentCategory={setCurrentCategory}></CategoryOptions><br/>
      </div>

      <h2>Item Inventory</h2>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          {currentCategory ? (
            currentProducts.map((product) => (
              <Product key={product._id} product={product} onAdd={onAdd}></Product>
            ))
          ) : (
            products.map((product) => (
              <Product key={product._id} product={product} onAdd={onAdd}></Product>
            ))
          )}

        </h2>
      </div>
    </div >
  );
};

export default Items;