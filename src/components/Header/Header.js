import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { reviewContext } from '../../App';
import logo from '../../images/logo.png';
import "./Header.css";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(reviewContext)

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
                    <Link to="/inventory">Manage Inventory</Link>
                    </li>
                    <button onClick={() => setLoggedInUser({})}>Sign Out</button>
                </ul>
            </nav>
        </div>
    );
};

export default Header;