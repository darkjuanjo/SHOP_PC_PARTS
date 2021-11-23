import React from "react";

function Category(props){
    const {category} = props;
    return (
        <div>
            <img className="small" src={category.image} alt={category.name}></img>
            <h3>{category.name}</h3>
            <div>${category.price}</div>
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}
export default Category;