import React from "react";
import { Link } from 'react-router-dom';

function Header(props) {
    const { countCartItems } = props;
    return (
        <header className="row block center">
            <div>
                <Link to="/">
                    <h1>Shop PC Parts</h1>
                </Link>
            </div>
            <div>
                <Link to="#/cart">

                    Cart {' '}
                    {countCartItems ? (
                        <button className="badge">{countCartItems}</button>
                    ) : (
                        ''
                    )};

                </Link> {' '}
                <Link to="/LoginForm">Sign In</Link>
            </div>
        </header>
    );
};
export default Header;