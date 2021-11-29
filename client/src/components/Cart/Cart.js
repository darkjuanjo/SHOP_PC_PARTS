import React, { useState } from "react";
import StripeContainer from "../StripeContainer/StripeContainer";


function Cart(props) {
    const [Checkout, setCheckout] = useState(false)
    const { cartItems, setCartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    function clearCart() {
        setCartItems([]);
        localStorage.removeItem('cartItems');
    }

    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div> Cart is Empty</div>}
            </div>
            {cartItems.map((item) => (
                <div key={item._id} className="row">
                    <img src={item.image} className="cart-img" alt="some description"></img>
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={() => onAdd(item)} className="add">+</button>
                        <button onClick={() => onRemove(item)} className="remove">-</button>
                    </div>
                    <div className="col-2 text-right">
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className='row'>
                        <div className="col-2">Item Price</div>
                        <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className="col-2">Tax Price</div>
                        <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className="col-2">Shipping Price</div>
                        <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className="col-2"><strong>Total Price</strong></div>
                        <div className="col-1 text-right"><strong>${totalPrice.toFixed(2)}</strong></div>
                    </div>
                    <hr />
                    <div className="row">
                        <button onClick={() => setCheckout(true)}>
                            Checkout
                        </button>
                        <button onClick={() => clearCart()}>Clear</button>
                    </div>
                </>
            )}
            {Checkout && cartItems.length !== 0 &&
                <form id="contact-form" >

                    <p>Your Address</p>
                    <div>
                        <label htmlFor="Country">Country:</label>
                        <input type="Country" className="flex-row my-2 mx-2" name="Country" />
                    </div>

                    <div>
                        <label htmlFor="State">State:</label>
                        <input type="State" className="flex-row my-2 mx-2" name="State" />
                    </div>
                    
                    <div>
                        <label htmlFor="City">City:</label>
                        <input type="City" className="flex-row my-2 mx-2" name="City" />
                    </div>

                    <div className='col-2'>
                        <label htmlFor="street">Street Address:</label>
                        <input type="street" className="flex-row my-2 mx-2" name="street" />
                    </div>

                    <div>
                        <label htmlFor="Zip Code">Zip Code:</label>
                        <input type="Zip Code" className="flex-row my-2 mx-2" name="Zip Code" />
                    </div>

                    <div className="flex-row"> 
                    <p>Payment Method</p>
                    </div>

                    <button data-testid="button" type="submit" >Submit Order</button>
                    <button onClick={() => setCheckout(false)}>Cancel</button>
                </form>
            }
        </aside>

    );
};

export default Cart;
