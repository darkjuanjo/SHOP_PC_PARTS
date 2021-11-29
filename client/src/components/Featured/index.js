import React from "react";

function Featured(props) {
    const { product } = props;

    return (
        <div className="products">
            <img className="featured" src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>${product.price}</div>
        </div>
    )
}
export default Featured;