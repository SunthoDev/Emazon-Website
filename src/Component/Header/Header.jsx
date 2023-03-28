
import React from 'react';
import "./Header.css"
import logos from"../../images/Logo.svg"

const Header = () => {
    return (
        <nav className='Header'>
            <img src={logos} alt="img"/>

            <div className="Menu_Item">
                <a href="#">Order</a>
                <a href="#">Order Review</a>
                <a href="#">Manage Inventory</a>
                <a href="#">Login</a>
            </div>


        </nav>
    );
};

export default Header;