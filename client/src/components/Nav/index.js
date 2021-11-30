import React, { useState } from 'react';
import Modal from '../Modal';
import { Link } from 'react-router-dom';

function Nav() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (

    //     <header className="row block center">
    //     <div>
    //         <Link to="/">
    //             <a href="#/">
    //                 <h1>Shop PC Parts</h1>
    //             </a>
    //         </Link>
    //     </div>
    //     <div>
    //         <a href="#/cart">

    //             Cart {' '}
    //             {countCartItems ? (
    //                 <button className="badge">{countCartItems}</button>
    //             ) : (
    //                 ''
    //             )}

    //         </a> {' '}
    //         <Link to="/LoginForm">Sign In</Link>
    //     </div>
    // </header>

        <header className="row block center">
            {isModalOpen && <Modal onClose={toggleModal} />}
            <h2>
                <Link to="/">
                    <span>Shop PC Parts</span>
                </Link>
            </h2>
            <nav>
                {/* Nav options can go in here */}
                <ul className="flex-row">
                    <li className="px-2">
                        <span>Not a member?</span>
                    </li>
                    <li className="mx-2">
                        <p onClick={() => toggleModal()}>
                            Sign up!
                        </p>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;