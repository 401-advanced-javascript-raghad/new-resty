import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <header>
        <h1>RESTy</h1>
        <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/history'>History</NavLink>
                </li>
            </ul>
        </header>
    );
    };


export default Header; 