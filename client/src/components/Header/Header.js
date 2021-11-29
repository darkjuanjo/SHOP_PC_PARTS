import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import Auth from '../../utils/auth';
import LoginForm from "../Login";
import SignUp from "../SignUp";

function Header({ countCartItems }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModal2Open, setIsModal2Open] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const toggleModal2 = () => {
        setIsModal2Open(!isModal2Open);
    }
    const loggedIn = Auth.loggedIn();
    const user = Auth.getProfile();
    const username = loggedIn? user.data.username : 'guest';
    const location = useLocation();
    return (
        <header className="row block center">
            {isModalOpen && <LoginForm onClose={toggleModal} />}
            {isModal2Open && <SignUp onClose={toggleModal2} />}
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
            {location.pathname === '/Items'&& username === 'admin' && (
            <div>
            <Link to="/AddInventory">
                    <h1>Add Inventory</h1>
            </Link>
        </div>
            ) }
            <div>
                {loggedIn ? (
                    <p></p>
                ) : (
                    <div className="bg-dark text-secondary p-3 display-inline-block">
                        <span>Not a member?</span>
                        <p className="link" onClick={() => toggleModal2()}>
                            Sign up!
                        </p>
                    </div>
                )}

            </div>
            <div>
                <Link to="/Cart">
                    Cart {'    '}
                    {countCartItems ? (
                        <button className="badge">{countCartItems}</button>
                    ) : (
                        ''
                    )}
                </Link> {'    '}
                {loggedIn ? (
                    <Link to={`/Profile/${user.data.username}`}>Hi {user.data.username}!</Link>
                ) : <p className="link" onClick={() => toggleModal()}>Sign In</p>}
            </div>
        </header>
    );
};
export default Header;