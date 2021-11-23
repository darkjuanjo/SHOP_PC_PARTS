import React from "react";
function Header(props) {
    const {countCartItems} = props;
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Shop PC Parts</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">
                    
                    Cart { ' '}
                    {countCartItems? (
                        <button className="badge">{countCartItems}</button>
                    ) : (
                        ''
                    )};
                    
                    </a> {' '} 
                     <a href="#/SignIn">SignIn</a>
            </div>
        </header>
    );
};
export default Header;