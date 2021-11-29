import React from "react";
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function Product(props) {
    const { product, onAdd } = props;
    const loggedIn = Auth.loggedIn();
    return (
        <div className="products">
            <img className="small" src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            {loggedIn && (
                <div>
                    <Link to="/Cart">
                        <button onClick={() => onAdd(product)}>Add to Cart</button>
                    </Link>
                </div>
            )}
        </div>
    )
}
export default Product;