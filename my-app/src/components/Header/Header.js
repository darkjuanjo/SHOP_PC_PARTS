import React from "react";
import { Link } from 'react-router-dom';

function Header(props) {
    const { countCartItems } = props;
    // const location = useLocation();
    return (
        <header className="row block center">
            <div>
                <Link to="/">
                    <a href="#/">
                        <h1>Shop PC Parts</h1>
                    </a>
                </Link>
            </div>
            <div>
            <Link to="/Cart">
                <a href="#/cart">

                    Cart {'    '}
                    {countCartItems ? (
                        <button className="badge">{countCartItems}</button>
                    ) : (
                        ''
                    )}

                </a>
                </Link> {'    '}
                <Link to="/LoginForm">Sign In</Link>
            </div>
        </header>
    );
};
export default Header;