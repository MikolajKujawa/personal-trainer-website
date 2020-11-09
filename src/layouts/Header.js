import React from 'react';
import '../styles/Header.css'

import logo from '../images/logo.jpg'
import Navigation from '../components/Navigation'

const Header = () => {
    return ( 
        <div class='header'>
            <img src={logo} alt='logo' />
            <Navigation/>
        </div>            
     );
}
 
export default Header;