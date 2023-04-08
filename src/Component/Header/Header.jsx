
import React from 'react';
import "./Header.css"
import logos from"../../images/Logo.svg"
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='Header'>
            <img src={logos} alt="img"/>

            <div className="Menu_Item">
                <ActiveLink to="/">Shop</ActiveLink>
                <ActiveLink to="/order">Order Review</ActiveLink>
                <ActiveLink to="/manage">Manage Inventory</ActiveLink>
                <ActiveLink to="/login">Login</ActiveLink>
            </div>


        </nav>
    );
};

export default Header;