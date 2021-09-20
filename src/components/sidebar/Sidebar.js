import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, AccountCircle, Menu, Close } from '@material-ui/icons'
import './sidebar.css';

function Sidebar() {
    const isOpen = true;
    return (
        <div className={`${isOpen ? 'sidebar-container show-sidebar' : 'show-sidebar'}`}>
            <div className="sidebar-top">
                <div>Comfy</div>
                <button className="close-btn"><Close /></button>
            </div>
            <div className="sidebar-middle">
                <Link to="/">
                <div>Home</div>
                </Link>
                <Link to="/about">
                <div>About</div>
                </Link>
                <Link to="/products">
                <div>Products</div>
                </Link>
            </div>
            <div className="sidebar-bottom">
            <Link to="/cart">
                <div classNam="cart">
                    <p>Cart</p>
                    <div className="icon">
                    <ShoppingCart />
                    <span>3</span>
                    </div>
                </div>
                </Link>
                <div classNam="login">
                    <p>Login</p>
                    <div className="icon">
                    <AccountCircle/>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Sidebar
