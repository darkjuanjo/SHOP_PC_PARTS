import React, { useState } from 'react';
// import { Link, Router } from 'react-router-dom';
import Modal from '../Modal';

function Nav() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <header className="flex-row px-1">
            {isModalOpen && <Modal onClose={toggleModal} />}
            <h2>
                <a data-testid="link" href="/">
                    <span>Shop PC Parts</span>
                </a>
            </h2>
            <nav>
                {/* Nav options can go in here */}
                <ul className="flex-row">
                    <li className="px-2">
                        <span>Not a member?</span>
                    </li>
                    <li className="mx-2">
                        <a onClick={() => toggleModal()}>
                            Sign up!
                        </a>
                    </li>
                </ul>
            </nav>
        </header >
    );
}

export default Nav;