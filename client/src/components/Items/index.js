import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../utils/queries';
import Category from '../Category/Category.js';

function Items(props) {
  const {onAdd} = props;
  const { loading, data } = useQuery(QUERY_ITEMS);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          <ul>
            {data.items.length > 0 ? (
              data.items.map(category => (
                  <Category key={category._id} category={category} onAdd={onAdd}></Category>
              ))
            ) : (
              <li>No Items in inventory yet!</li>
            )}
          </ul>
        </h2>
      </div>
    </div>
  );
};

export default Items;