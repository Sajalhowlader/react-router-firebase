import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <h1>React-router-firebase</h1>
            <Link to='Home'> Home</Link>
            <Link to='About'>About</Link>
            <Link to='Cart'>Cart</Link>
            <Link to='Contacts'>Contacts</Link>
            <Link to='LogIn'>Contacts</Link>
        </nav>
    );
};
export default Header;