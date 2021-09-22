import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, AccountCircle, Menu, Close } from '@material-ui/icons'
import './sidebar.css';
import {useProductsContext } from '../../context/productsContext'


function Sidebar() {
    const {isSidebarOpen, closeSidebar} = useProductsContext()
    
    return (
        <div className={`${isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}`}>
            <div className="sidebar-top">
                <div>Comfy</div>
                <button className="close-btn" onClick={closeSidebar}><Close /></button>
            </div>
            <div className="sidebar-middle">
                <Link to="/" onClick={closeSidebar}>
                <div >Home</div>
                </Link>
                <Link to="/about" onClick={closeSidebar}>
                <div >About</div>
                </Link>
                <Link to="/products" onClick={closeSidebar}>
                <div>Products</div>
                </Link>
                <a onClick={closeSidebar}><div>Checkout</div></a>
            </div>
            <div className="sidebar-bottom">
            <Link to="/cart" onClick={closeSidebar}>
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
