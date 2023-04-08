import React from 'react';
import "./Active.css"
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {

    return (

      
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? "bg-red-500" : "" }
            >
                {children}
            </NavLink>
        

    );
};

export default ActiveLink;