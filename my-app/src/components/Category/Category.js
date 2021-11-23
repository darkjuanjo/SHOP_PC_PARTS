import React from "react";

function Category(props){
    const {categories} = props;
    return (
        <div>
            <img className="small" src={categories.image} alt={categories.name}></img>
            <h3>{categories.name}</h3>
            <div>${categories.price}</div>
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}
export default Category;