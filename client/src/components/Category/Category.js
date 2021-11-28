import React from "react";
import Auth from '../../utils/auth';

function Category(props){
    const { category, onAdd } = props;
    const loggedIn = Auth.loggedIn();
    return (
        <div className="products">
            <img className="small" src={category.image} alt={category.name}></img> 
            <h3>{category.name}</h3>
            <div>${category.price}</div>
            {loggedIn && (
            <div>
            <button onClick={() => onAdd(category)}>Add to Cart</button>
            </div>
            )}
        </div>
    )
}
export default Category;