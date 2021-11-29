import React from "react";
import { Link, userLocation } from 'react-router-dom';
import Auth from '../../utils/auth';

function Header({countCartItems}) {
    // const { loading, data } = useQuery(QUERY_ME_BASIC);
    // const location = useLocation();
    const loggedIn = Auth.loggedIn();
    const user = Auth.getProfile();
    const location = userLocation();
    return (
        <header className="row block center">
            <div>
                <Link to="/">
                        <h1>Shop PC Parts</h1>
                </Link>
            </div>
            <div>
                <Link to="/Items">
                        <h1>Items</h1>
                </Link>
            </div>
            {location.pathname === '/Items'&& user.username === 'admin' && (
            <div>
            <Link to="/AddInventory">
                    <h1>Add Inventory</h1>
            </Link>
        </div>
            ) }
            <div>
                <Link to="/Cart">
                        Cart {'    '}
                        {countCartItems ? (
                            <button className="badge">{countCartItems}</button>
                        ) : (
                            ''
                        )}
                </Link> {'    '}
                {loggedIn  ? (
                <Link to={`/Profile/${user.data.username}`}>Hi {user.data.username}!</Link>
                ):<Link to="/LoginForm">Sign In</Link> }
            </div>
        </header>
    );
};
export default Header;