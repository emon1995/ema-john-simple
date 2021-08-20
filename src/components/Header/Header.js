import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo"  />
            <nav>
                <ul>
                    <li >
                    <Link to="/shop">Shop</Link>
                    </li>
                    <li >
                    <Link to="/review">Order Review</Link>
                    </li>
                    <li >
                    <Link to="/manage">Manage Inventory</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;