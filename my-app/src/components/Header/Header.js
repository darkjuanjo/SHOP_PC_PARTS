import React, { useState } from "react";
import Modal from 'react-modal';
import LoginForm from "../Login/LoginForm";

Modal.setAppElement('#root')
function Header(props) {
    const { countCartItems } = props;
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <header className="row block center">
            <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-computer-sales-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" />
            
            <div>
                
                <a href="./">
                    <h1>Shop PC Parts</h1>
                    <p><em><strong>We offer the best deals ever!!</strong></em></p>
                </a>
            </div>
            <div>
                <a href="#/Cart">

                    Cart {' '}
                    {countCartItems ? (
                        <button className="badge">{countCartItems}</button>
                    ) : (
                        ''
                    )};

                </a> {' '}
                <button className="signIn" onClick={() => setModalIsOpen(true)}>SignIn</button>
                <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={true} onRequestClose={() => setModalIsOpen(false)}
                style={
                   {
                       overlay: {
                           height: '100%',
                           width: '100%'
                       },
                       content: {
                           color: 'darkblue',
                           height: '40%',
                           width: '40%', 
                           left:'40rem',
                           top:'20rem'                      
                       },

                   }
                }
                
                >
                    
                    <h2 className="modalTitle">Sign In</h2>
                    <p className='modaltxt'>Login to your account is very easy!</p>
                    <LoginForm></LoginForm>
                    <div className="modalBtn">
                        <button onClick={() => LoginForm}>Login</button>
                        <button onClick={() => setModalIsOpen(false)}>Close</button>
                    </div>


                </Modal>

            </div>
        </header>
    );
};
export default Header;